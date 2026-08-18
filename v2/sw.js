/* rod-saude — service worker
   Estratégia: network-first para o HTML (para você sempre pegar a versão nova),
   cache-first para os demais arquivos. Os DADOS ficam no localStorage,
   nunca no cache — limpar o cache não apaga registro nenhum. */
const CACHE = 'rod-saude-v2beta4';
const ARQ = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
/* A pasta /anamnese/ fica fora do controle deste service worker: são páginas
   independentes, e sem esta exceção o app assumiria a navegação delas quando
   estivesse sem internet, servindo o próprio app no lugar do formulário. */
const FORA = /\/anamnese\//;

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
