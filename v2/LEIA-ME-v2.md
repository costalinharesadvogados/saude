# saude familia — versão 2, multiperfil (TESTE)

Endereço: **https://costalinharesadvogados.github.io/saude/v2/**

Esta é a versão de **teste**. A versão 1, de perfil único, continua intacta em `https://costalinharesadvogados.github.io/saude/` e é a que roda no seu aparelho de uso diário. As duas convivem no mesmo repositório e **não se enxergam**: a v1 grava em `rodsaude_v1` e a v2 em `rodsaude_v2`, gavetas diferentes do mesmo navegador.

## O que muda

Cada pessoa da família é um **perfil**. Registro alimentar, treino, medidas, exames, cardápio, prazos e alertas ficam dentro do perfil. Nada atravessa de um para outro.

## Como funciona na prática

### No primeiro uso, o aparelho pergunta de quem é

Três caminhos:

| Opção | Quando usar |
|---|---|
| **Perfil em branco** | O caso normal. Nasce sem cardápio, sem exames, sem treino. O conteúdo é montado comigo e entra por importação. |
| **Semente do Rodolfo** | Só no seu aparelho. Traz o cardápio de 3.053 kcal, os exames, os achados de coluna e o programa ABCDE. Esta opção também liga o modo master. |
| **Importar arquivo** | Quando o perfil já existe e veio de outro aparelho, ou quando é um backup da versão 1. |

Feita a escolha, **o aparelho fica preso naquele perfil**. É o que impede marcar o jantar da sua mãe no seu registro.

### O acesso master

O seu aparelho troca de perfil livremente. Para ligar o modo master: **Dados → Liberar acesso master → código `CL2026`**.

Com o master ligado aparece um seletor no alto da tela e, na aba Dados, os botões de criar, renomear, trocar e apagar perfil.

> O código é uma **tranca de armário, não um cofre**: impede o toque errado, não protege contra quem queira mesmo abrir. Os dados continuam legíveis no navegador. Para trocar o código, edite a linha `const CODIGO_MESTRE = 'CL2026';` no `index.html`.

Para desligar: **Dados → Sair do modo master**. O aparelho volta a ficar preso ao perfil ativo.

### Backup: dois botões, dois usos

- **Exportar este perfil** → um arquivo só com a pessoa ativa. É o que você me manda. O perfil da sua mãe vai sozinho, sem os seus dados junto.
- **Exportar tudo** → o aparelho inteiro, com todos os perfis. É o backup de verdade.

A importação **reconhece sozinha** qual dos dois chegou, e ainda aceita um backup da versão 1. Se o nome do perfil no arquivo já existir no aparelho, ela pergunta antes de substituir.

## Como montar o perfil de alguém

1. No app, crie o perfil em branco com o nome da pessoa.
2. Aqui na conversa, me mande os exames, o histórico e o que a pessoa come e faz.
3. Eu devolvo um bloco JSON com as chaves que mudaram.
4. No app, **Claude → colar → Aplicar**. Ou salve como `.json` e use **Dados → Importar**.

Chaves aceitas: `plano`, `labs`, `estrutural`, `perguntas`, `prazos`, `cuidados`, `rot`, `notas`, `destaque`, `contexto`, `base`, `cfg`, `bib`.

## O que virou dado de perfil (antes era fixo no código)

Na v1, os alertas clínicos eram seus, escritos no programa. Aqui viraram conteúdo do perfil:

- **`prazos`** — a lista de consultas e exames pendentes. Substituiu os campos fixos de cistatina, coluna, lipídico e avaliação física. Cada perfil monta a sua. Modo `pendente` alerta enquanto a data estiver vazia; modo `agenda` faz a contagem regressiva.
- **`cuidados`** — os avisos que aparecem por exercício. A expressão de busca virou texto, para poder viajar em JSON.
- **`notas`** — as justificativas personalizadas dos alertas. Sem nota, o app usa um texto genérico. É por isso que o perfil da sua mãe não fala de creatina nem de dobra abdominal.
- **`rot`** — os rótulos dos treinos (A, B, C, D, D2, E).
- **`destaque`**, **`contexto`**, **`base`** — o alerta do topo da aba Saúde, o contexto clínico enviado a mim e a linha de rodapé.

## Testar sem estragar nada

Como as chaves são diferentes, você pode abrir as duas versões no mesmo celular. Instale a v2 pela **Tela de Início** a partir do endereço `/v2/` — ela se instala como app separado, com nome próprio ("saude familia").

Sugestão de teste: crie um perfil em branco chamado "Teste", brinque à vontade, e apague depois em **Dados → Apagar perfil**.

## O que ainda falta

- Sincronizar perfis entre aparelhos sem passar arquivo à mão.
- Escolher se o perfil da sua mãe deve ter aba de treino, ou só alimentação e saúde.
- Biblioteca de extras compartilhada entre perfis (hoje cada perfil tem a sua).
