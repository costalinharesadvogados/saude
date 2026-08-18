/* rod-saude — service worker
   Estratégia: network-first para o HTML (para você sempre pegar a versão nova),
   cache-first para os demais arquivos. Os DADOS ficam no localStorage,
   nunca no cache — limpar o cache não apaga registro nenhum. */
const CACHE = 'rod-saude-v12';
const ARQ = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
/* As pastas /anamnese/ e /v2/ ficam fora do controle deste service worker.
   /anamnese/ são páginas independentes; /v2/ é a versão de teste multiperfil,
   com service worker próprio. Sem esta exceção, o app da raiz assumiria a
   navegação das duas quando o celular estivesse sem internet e serviria a si
   mesmo no lugar delas. */
const FORA = /\/(anamnese|v2)\//;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQ)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (FORA.test(new URL(req.url).pathname)) return;   // formulários de anamnese: rede direta
  const html = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');

  if (html) {
    e.respondWith(
      fetch(req).then(r => {
        const cp = r.clone();
        caches.open(CACHE).then(c => c.put(req, cp));
        return r;
      }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(r => r || fetch(req).then(res => {
      const cp = res.clone();
      caches.open(CACHE).then(c => c.put(req, cp));
      return res;
    }).catch(() => r))
  );
});
