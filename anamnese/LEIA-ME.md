# rod-saude — três formulários de anamnese

Coleta das informações básicas nas três áreas do projeto, para adaptar o app de registro diário a outra pessoa.

| Arquivo | Área | Seções | Campos | Essenciais |
|---|---|---|---|---|
| `index.html` | **Capa e painel** | — | — | — |
| `form-1-medico.html` | Histórico médico | 13 | 57 | 5 |
| `form-2-nutricao.html` | Nutrição | 11 | 66 | 6 |
| `form-3-treino.html` | Atividade física | 11 | 63 | 12 |

---

## A capa

`index.html` é a porta de entrada. **Mande esse link, não os três separados.** Ela traz:

- Os três formulários em cartões, cada um com o que cobre, quantos campos tem, quanto tempo leva e o que ter em mãos antes de começar.
- O **estado de cada um**: não iniciado, percentual em andamento ou completo, com barra de progresso. Atualiza sozinha quando a pessoa volta de um formulário.
- O botão **Juntar e enviar os três**, que reúne tudo num pacote só — resumo em texto e dados estruturados — e avisa o que ainda falta.
- Quatro passos explicando o caminho do formulário até o app instalado no celular.
- Seis explicações abertas sobre por que cada bloco de perguntas existe, incluindo as três perguntas que mais pesam.
- O aviso de privacidade e um botão para apagar tudo do aparelho.

## Como usar

Cada arquivo é uma página única, sem dependência externa. Funciona de três jeitos:

1. **Enviar o link.** Suba os quatro no mesmo repositório do app no GitHub Pages e mande o endereço da capa. A pessoa abre no celular e navega dali.
2. **Mandar os arquivos.** Envie os `.html` por WhatsApp ou e-mail; a pessoa abre no navegador do próprio aparelho. Nesse caso o painel de progresso da capa pode não enxergar os formulários, porque cada arquivo aberto solto fica num contexto separado — o link é o caminho recomendado.
3. **Na sua tela, durante o atendimento.** Você conduz a entrevista e preenche junto.

O que a pessoa digita fica guardado **no aparelho dela**, no armazenamento do navegador. Ela pode fechar e voltar depois sem perder nada, e nada é enviado a lugar nenhum automaticamente.

## Os dois momentos de preenchimento

Cada seção vem marcada:

- **PESSOA** (verde) — a própria pessoa responde, em linguagem simples, com exemplo em cada campo.
- **PROFISSIONAL** (amarelo) — você preenche. Ficam **ocultas por padrão**, para não intimidar quem está respondendo. O interruptor no topo revela.

Os blocos do profissional são onde entram o cálculo do gasto energético, os macros alvo, as contraindicações, a prescrição do treino e as perguntas a levar ao médico.

## O que sai no final

O botão **Gerar** produz duas coisas:

- **Resumo em texto** — legível, organizado por seção, para colar numa conversa ou num e-mail. No fim ele lista os campos essenciais que ficaram em branco.
- **Pacote de dados (JSON)** — o formato estruturado. É este que eu leio para montar o perfil do app sem digitação dupla.

Há ainda **Enviar**, que abre o compartilhamento do celular, e **Baixar**, que salva o `.json` com o nome da pessoa e a data no padrão do escritório.

## O que cada formulário cobre

**1. Médico.** Identificação, objetivo, condições de saúde (24 opções + detalhamento), cirurgias e lesões, medicações de uso contínuo, alergias, exames de sangue (35 marcadores em lista), exames de imagem, dores e limitações por região do corpo, sono e apneia, hábitos, histórico familiar, rastreios. Fecha com o bloco do profissional: sinais de alerta, contraindicações, exames a solicitar, perguntas para o médico e liberação para exercício.

**2. Nutrição.** Antropometria e dobras, histórico de peso, objetivo, rotina do dia, recordatório alimentar refeição a refeição, fim de semana com álcool quantificado, preferências e restrições, suplementos, digestão e comportamento alimentar. Fecha com o cálculo do profissional: TMB, gasto total, déficit, macros e alertas a programar no app.

**3. Atividade física.** PAR-Q de sete perguntas, histórico de treino, rotina atual, **exercícios de cada treino com séries, repetições e carga**, cardio, inventário do equipamento disponível na academia, limitações por movimento, desempenho atual e metas. Fecha com a prescrição do profissional.

## Três campos que valem mais que os outros

Foram desenhados a partir de erros reais deste projeto:

- **"Há quanto tempo o peso está estável"** (nutrição). Se o peso não muda há meses, o que a pessoa come hoje é, por definição, o que ela gasta. É a estimativa de gasto energético mais confiável que existe, e não custa exame nenhum.
- **"Quanto pesa o SEU scoop, na balança"** (nutrição). Scoops variam de 20 a 40 g entre marcas. Errar esse número desloca a conta de proteína do dia inteiro — foi exatamente o que aconteceu aqui, e custou uma revisão de plano.
- **"De quanto em quanto sobem os halteres"** (treino). É esse número que define o ritmo real da progressão de carga. Prescrever aumento de 1 kg numa academia cujo menor salto é 2 kg é prescrever o impossível.

## Depois de receber

Mande os pacotes JSON e eu monto, para aquela pessoa: o cardápio com macros, as metas do dia, os marcadores laboratoriais da aba de saúde, os alertas contextuais ancorados nos achados dela e a biblioteca de exercícios. Sai no mesmo formato de pacote que o app já sabe importar.

---

*Material de apoio gerado por inteligência artificial. Não substitui consulta médica, nutricional ou avaliação de profissional de educação física. Os formulários coletam dados sensíveis de saúde: compartilhe apenas com quem for conduzir o acompanhamento e guarde os arquivos gerados em local restrito.*
