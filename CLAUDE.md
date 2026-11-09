# Portfólio Daniel Rios · instruções para o Claude Code

Site pessoal de **Daniel Rios** (Daniel da Cunha Rios), AI Builder (20 anos, disponível para mudança de cidade), posicionado para vagas de GTM Engineering, RevOps, Product, Sales, Business Development e Dados.

O site já está pronto em conteúdo e design. O seu trabalho é **levá-lo a produção**: completar o que falta, endurecer o código e publicar. Não redesenhe nada sem o Daniel pedir.

## Estrutura

```
index.html            página única (home + página de stack via #stack)
assets/css/styles.css todo o CSS, com tokens de cor em :root (tema claro padrão, escuro via prefers-color-scheme e data-theme)
assets/js/data.js     CONTEÚDO: CONFIG (contatos), ICON, SOC, SCREENS (telas recriadas dos produtos), CASES, MORE, CATS, DAILY, BASIC
assets/js/main.js     lógica: render de cases, modal de case, galeria/lightbox, contatos, stack (busca e filtro), roteador por hash, abas, tema
assets/img/           mascote, favicon e fotos (WebP)
assets/fonts/         as três fontes em WOFF2, servidas pelo próprio site
assets/img/logos/     logos de parceiros e empresas, já convertidos (veja abaixo)
tools/                utilitários offline, fora do site e fora do deploy
```

- HTML, CSS e JS puros. Sem build, sem framework. Mantenha assim, salvo se o Daniel pedir outra coisa.
- `data.js` e `main.js` são scripts clássicos: as constantes de `data.js` são globais e usadas por `main.js`. A ordem dos `<script>` importa.
- Rotas: `#stack` mostra a página de stack e esconde `<main>`. Qualquer outro hash rola até a seção na home.
- Identidade visual: preto e branco com **um** destaque azul (`--accent`). Fontes: Schibsted Grotesk (display), Instrument Sans (texto) e JetBrains Mono (rótulos).
- As três fontes são variáveis, em WOFF2, servidas de `assets/fonts/` e declaradas em `@font-face` no topo do `styles.css`. Não volte para o Google Fonts: a folha externa bloqueava a renderização e a troca de fonte causava deslocamento de layout.
- **Logos:** os arquivos em `assets/img/logos/` são tinta preta com transparência, não os PNGs coloridos da marca. A opacidade de cada pixel é o quanto ele se afasta do fundo, então uma só imagem serve aos dois temas: no claro aparece preta e no escuro o CSS aplica `filter:invert(...)`. É isso que evita os retângulos brancos que os PNGs com fundo sólido deixariam no tema escuro. Os tokens `--ink-invert` e `--ink-invert-alt` fazem a inversão; o `alt` usa a segunda dentro da caixa do trabalho atual, que já é invertida.
- Para somar um logo novo: salve o PNG da marca e rode `python tools/gerar-logos.py <pasta-dos-png>`. O script imprime o `width` e o `height` que o `<img>` precisa ter. Para um lockup horizontal que vá entrar na caixa quadrada da experiência, passe o nome do arquivo como argumento e ele gera também a versão só do ícone.
- Logos deitados não cabem na caixa de 56px da experiência: ali vai o ícone da marca (`-icon.webp`), porque o nome da empresa já está do lado, em destaque. Na esteira de parceiros, marcas empilhadas em várias linhas viram borrão: deixe essas como texto (é o caso do Governo da Bahia).
- Idioma do site: português do Brasil.

## Regras

1. **Nunca invente fatos, números, cargos ou resultados.** Tudo que está no site foi confirmado pelo Daniel ou por fonte pública. Se faltar um dado, pergunte a ele.
2. Trechos com `class="todo"` (sublinhado azul tracejado) esperam dados do Daniel. Antes de publicar, preencha cada um com a resposta dele ou remova a frase.
3. As telas em `SCREENS` são recriações ilustrativas, legendadas como tal. Se o Daniel enviar prints reais, troque a recriação pela imagem e remova a legenda "Recriação ilustrativa".
4. Fotos com outras pessoas (LTEI e Trenby) só ficam no site público depois que o Daniel confirmar que elas autorizaram.
5. Mantenha acessibilidade: foco visível, `alt` nas imagens, `aria` nos controles e respeito a `prefers-reduced-motion`.

## Decisões do Daniel (nov/2026)

- **Não destacar a cidade atual.** O site deve deixar claro que ele está disponível para mudança. Não reintroduza "Feira de Santana" em títulos, rodapé, metadados ou imagem de compartilhamento.
- **Sem "Open to Work" em destaque.** Só a nota discreta no bloco de contato ("Aberto a novas oportunidades...").
- **Não citar a AsterBela** em nenhum lugar (é pessoal). **O app "Sprints 5W2H" não existe**: não o recrie.
- **Ordem dos projetos:** 1. Finquer, 2. Trenby, 3. Just Travel e Travia, 4. KOBI, 5. Foresail (cases grandes em `CASES`), depois 6. LTEI, 7. Creators Teens · Mundo SENAI e 8. Descontaza (em `MORE`).
- **Projetos e negócios são blocos separados na experiência.** "Projetos que fundei" reúne Finquer e LTEI; "Negócios que fundei" reúne Trenby e Descontaza. A LTEI é liga acadêmica sem fins lucrativos, então não entra como negócio.
- **Capa dos cases é a marca, não foto.** Os arquivos `assets/img/capa-*.webp` são 1200×900, com o logo centrado ocupando no máximo 40% da largura sobre o fundo da marca. Esse formato existe porque `.shot.photo img` usa `object-fit:cover`: com essa folga, o recorte come só o fundo e nunca a marca. Fundos: Finquer no lime `#C1FF72` da própria paleta, Trenby no verde `#31CF6E`, KOBI em preto, e Foresail, LTEI, Descontaza e Cocria em branco, e Creators Teen no quase-preto `#0C0C0E`. O logo do Creators Teen veio sobre um gradiente escuro: separei a marca do fundo por brilho (limiar de luminância em 58, com borda suave) em vez de recortar um retângulo, que deixaria emenda visível contra a cor chapada. No tema escuro essa capa e a da KOBI se fundem ao cartão; a marca continua legível e o efeito é proposital, não bug.
- O `cover` tem prioridade sobre o `screen` no cartão. Quando o case tem os dois, a tela recriada não se perde: ela aparece dentro do modal, num bloco "Interface", com a mesma legenda de recriação. É o caso da Finquer e do Foresail.
- Os projetos menores de `MORE` também aceitam `cover` próprio. Sem ele, a capa continua sendo `photos[0]`; sem fotos, o painel de ícone.
- O lockup do Foresail veio com o nome em branco, para fundo escuro. Como o Daniel pediu capa branca, recoloro só os pixels claros e dessaturados para a tinta do site e preservo o F azul e o ponto verde. Se ele mandar a versão oficial para fundo claro, troque.
- **Imagens:** só as fotos que o Daniel enviar. Projetos sem foto usam painel de ícone (`ART`) ou tela recriada (`SCREENS`). Nunca deixe espaço vazio.
- **Não usar o mascote no bloco de contato** (ficava cortado). No hero ele deve aparecer inteiro, sem cortar a cabeça.
- URL de produção: **https://daniel-rios-my-portfolio.vercel.app/** (Vercel). Canonical, Open Graph, JSON-LD, robots e sitemap apontam para ela.
- O domínio anterior, `portfolio-dr-six.vercel.app`, era o nome automático antigo do projeto na Vercel e hoje responde 307 para o atual. Não o use em metadado nenhum.

## Dados confirmados (use como fonte)

- 20 anos (nasc. 26/10/2006). Fundou a Descontaza aos 15 e a Trenby aos 16.
- Formação: Técnico em TI pelo SENAI; Análise e Desenvolvimento de Sistemas na UNIFAN (ago/2026 a dez/2028). Inglês básico; não fala espanhol.
- Hobbies: jiu-jitsu, séries e filmes, jogos online, gastronomia e viagens.
- Just Travel: estágio (fundraising da 2ª rodada, editais, competições de fomento e 1 licitação) → AI & Automation (n8n e Python: qualificação de leads integrada ao CRM, antes 20+ min por lead; vouchers automáticos, 400+/mês, ~30 min cada; notificação inteligente de vendas; cross-sell pelo WhatsApp) → Business Development (GTM da Travia: estratégia de produto, máquina de vendas e arquitetura de receita; primeiras vendas com ROI médio de 347,7% em out/26). Implantou em campo o Visite Morro do Chapéu e o Visite Maraú (mapeamento, capacitação, digitalização, liderando produto).
- Just Cidades: projeto da Just Travel que leva destinos digitais a municípios. É dentro dele que entram o Visite Morro do Chapéu, o Visite Maraú e o Visite Caravelas, e o trabalho com cidades e governo. Nos dois primeiros ele implantou e liderou produto; no Visite Caravelas, contribuiu presencialmente no mapeamento. O Visite Caravelas não tem site no ar (o domínio não resolve), então fica só em texto, fora da lista de projetos com link.
- Giro Digital: projeto à parte, em parceria com a FLEM, em Salvador, executado pela Just Travel. O Daniel palestrou na edição mais recente.
- Editais, licitações e competições de startup em que ele contribuiu na Just Travel: Destino Futuro (Embratur), edital de inovação da FINEP 2026 regional, edital BID/Numerik AmazTur, edital Destino Lab Paraty 2026, Prêmio Exame/Apex, Conexão Luso-BR, a licitação da SETUR-BA para o mapeamento das 13 zonas turísticas e o Open 100 Startups.
- Digitrade (Embratur e Sebrae): o Daniel contribuiu na criação da metodologia, no desenvolvimento dos conteúdos e na coleta de indicadores, com análise dos resultados.
- Just Europa: internacionalização da Just Travel na Europa, começando por Portugal, em parceria com a ApexBrasil, no período em que ele era estagiário.
- Voucher Único e Painel do Produtor: produtos novos no ecossistema da Just Travel. O Voucher Único atua na venda presencial dentro dos destinos; o Painel do Produtor, na gestão simplificada de prestadores e fornecedores de turismo.
- Ainda no estágio, construiu um dashboard completo de acompanhamento de vendas no Metabase, com SQL.
- Eventos da Just Travel que ele participou: ABAV Expo 2026, Web Summit Rio (2025 e 2026), Just Academy 2026, Digitrade Salvador, Giro Digital, lançamento do Visite Maraú, lançamento do Visite Morro do Chapéu e Salão do Empreendedor do Sebrae.
- Gestão de projetos entra na frente de **Product**, não na de Customer Success: o Daniel pediu para separar as duas. A quinta frente é só Customer Success e CX.
- Liderança é habilidade declarada na KOBI (liderou o setor de CS) e na Travia (lidera o go-to-market); está no `stack` dos dois cases.
- Áreas que o Daniel também quer no radar, com lastro no que já fez: gestão de projetos (liderou o time e o desenvolvimento no hackathon da Growthway, e implantou destinos em campo), CS/CX (estruturou o CS e o churn na KOBI) e venture capital/financeiro (fundraising da 2ª rodada da Just Travel, editais e competições; e a própria Finquer, que é de compras e pagamentos).
- Visite Morro do Chapéu: 60+ empreendedores impactados, 36+ negócios mapeados e ativos online, 3 mil+ passageiros gerados, ROI em 8 meses.
- KOBI: estruturou o processo de CS e relacionamento; responsável direto pelo controle de churn.
- Foresail: hackathon da Growthway, 3º lugar; Daniel liderou o time e a gestão do desenvolvimento.
- Trenby: MVP com IA e ferramentas prontas; 1 escola pública como primeira adotante, 150+ alunos.
- LTEI: primeira liga dos cursos de tecnologia da UNIFAN; Daniel fundou e preside; 50+ membros.
- Instagram, perfis conferidos um a um no navegador em nov/2026: @justtraveloficial, @usetravia (Travia), @trenbyeduca (Trenby) e @ltei.unifan (LTEI). O Instagram devolve HTTP 200 até para perfil inexistente, então `curl` não serve para checar: abra no navegador e veja se o título é "Profile não está disponível". **O último post do @trenbyeduca é de uma invasão que a conta sofreu, não é conteúdo da Trenby**; o case diz isso.
- O pitch deck da Finquer é servido em `finquer-deck.html`, na raiz, e está linkado nas referências do case. O arquivo veio exportado com `<title>`, `<meta>`, `<link>` e `<style>` dentro do `<body>`, o que dava centenas de erros de validação; movi esse bloco para o `<head>` e corrigi o charset, sem tocar no conteúdo. Sobraram 3 avisos de pulo de nível de cabeçalho dentro dos slides, que não valem o risco de restilizar o deck.
- A pasta `Registros daniel/` é material bruto que o Daniel manda e está no `.gitignore`. Nunca a comite: são dezenas de fotos pesadas. Converta o que for usar para WebP em `assets/img/` e deixe o resto lá.
- O logo da LTEI traz "Liga de Tecnologia, Empreendedorismo e Inovação · UNIFAN". Li isso de uma imagem que o Daniel mandou, mas **confirme com ele antes de usar o nome por extenso no site**.
- A capa e o ícone da Cocria Sales usam o monograma "CRL", confirmado pelo Daniel em nov/2026 como a marca da Cocria. A empresa não tem site no ar, então essa é a fonte.
- Finquer (fundada por ele em 2026, https://finquer-site.vercel.app/): plataforma de compras que liga requisição, cotação, aprovação e pagamento numa política só, que vale também para agentes de IA que compram dados e APIs. **Site no ar e produto em construção: não há cliente em produção e não existe métrica de resultado.** Os números que aparecem na demo do site são ilustrativos, e o próprio site diz isso; nunca os use como resultado do Daniel. O tempo de 3 a 6 h por comparativo é estudo do Hackett Group citado pela imagetotable.ai, não medição dele. A Finquer concorre na edição atual do Supernova, do Sebrae, com **resultado ainda não divulgado**: nunca escreva que ela ganhou, foi finalista ou passou de fase.

## Checklist de produção

### 1. Conteúdo e autorizações
- [x] Usar os dados profissionais confirmados em nov/2026, incluindo formação, idioma, métricas e papéis descritos acima.
- [x] Apresentar os projetos e a atuação na Just Travel, incluindo o Digitrade com Embratur e Sebrae, sem atribuir participação não confirmada.
- [x] Não citar a AsterBela nem recriar o app "Sprints 5W2H".
- [x] Confirmar com o autor que as fotos da LTEI e da Trenby são de sua propriedade e podem ser publicadas.

### 2. SEO e compartilhamento
- [x] Criar `assets/img/og-cover.png` (1200×630) com o mascote, nome e posicionamento.
- [x] Configurar `canonical`, Open Graph, Twitter Cards e JSON-LD para `https://daniel-rios-my-portfolio.vercel.app/`.
- [x] Criar `robots.txt`, `sitemap.xml` e `404.html`.
- [x] Confirmar palavras-chave de GTM, RevOps, Product, Sales, Business Development, Dados e IA nos metadados e no JSON-LD.
- [x] O JSON-LD é um `@graph` com WebSite, ProfilePage, Person e as Organizations da Finquer e da LTEI, com `knowsAbout` (44 termos), `hasOccupation`, `award`, `knowsLanguage` e `memberOf`. É aí que mora o peso de SEO para buscadores e para IA, não em `<meta name="keywords">`, que o Google ignora desde 2009. Ao somar uma área nova ao site, some também em `knowsAbout` e em `hasOccupation`.

### 3. Qualidade do código
- [x] Rodar o site localmente por HTTP e checar o console sem erros, em desktop e em 375px, nos temas claro e escuro.
- [x] Confirmar IDs únicos, metadados JSON-LD válidos e caminhos relativos funcionais no subdiretório do Pages.
- [x] Validar formalmente a conformidade do HTML. `index.html`, `404.html` e `styles.css` passam sem nenhum erro no validador Nu do W3C, incluindo o DOM já montado pelo JavaScript.
- [x] Lighthouse com meta de 90+ em Performance, Acessibilidade, Boas práticas e SEO. Medido no domínio atual (nov/2026): **Acessibilidade, Boas práticas e SEO em 100** e Performance entre **98 e 100** em três rodadas, com CLS 0. O que fechou a conta: fontes no próprio site com `preload` e fallbacks de métricas casadas, `preload` do mascote do hero, `loading="lazy"` nas capas dos cases e `width`/`height` em todas as imagens.
- Meça a Performance em produção **mais de uma vez**: o localhost esconde o CLS da troca de fonte, porque lá a fonte sempre chega antes da primeira pintura.
- A Acessibilidade às vezes mede 96 em vez de 100, sempre pelo mesmo motivo: as palavras que giram no hero fazem *crossfade*, e quando o Lighthouse amostra no meio da transição o axe calcula a cor misturada e acusa contraste baixo. Parado, o texto é `--accent` sólido sobre o fundo, bem acima de AA. É estado transitório de animação, não um problema real; não redesenhe o rotador por causa disso.
- [x] Verificar contraste AA dos textos e estados principais nos dois temas.
- [x] Testar teclado: foco no menu, abrir/fechar case com Escape, galeria com as setas e busca da stack.
- [x] Testar os links externos (sites dos projetos, referências e redes), incluindo o da Finquer. Todos respondem e todos abrem em nova aba com `rel="noopener"`. **Exceção: `trenby.com.br` não resolve mais (domínio inexistente), então o link saiu do case e da experiência; o projeto continua no site.** Se o Daniel renovar o domínio, basta devolver `url` ao case `trenby` em `data.js` e o link na linha da Trenby no `index.html`.
- [ ] Opcional: minificar CSS e JS no deploy, sem mudar os fontes. Com 100 de Performance não é necessário; a Vercel já comprime os arquivos na entrega.

### 4. Publicação
Produção: **Vercel** em `https://daniel-rios-my-portfolio.vercel.app/`, conectada à branch `main` do repositório `danielcunharios/portfolio-dr`.
- [x] Confirmar que as fotos da LTEI e da Trenby pertencem ao autor e podem ser publicadas.
- [x] Tornar público o repositório existente `danielcunharios/portfolio-dr`.
- [ ] Peça confirmação ao Daniel antes de cada push.
- Deploy da Vercel após push na branch `main`; confirme a conclusão do deploy e a URL publicada.

### 5. Depois do ar
- [ ] Analytics leve e sem cookies (Plausible, Umami ou Vercel Analytics), se o Daniel quiser.
- [ ] Colocar o link do site nos Destaques e na seção "Sobre" do LinkedIn, e no currículo.
- [ ] Versão em inglês (`/en/`) para vagas remotas internacionais, quando o Daniel pedir.

## Como editar conteúdo depois

- Contatos: `CONFIG` em `assets/js/data.js`
- Cases principais: `CASES`. Projetos menores com galeria: `MORE`, onde `photos` é uma lista de `[src, legenda]`, `refs` é uma lista de `[título, url]` e `recog` é uma lista de reconhecimentos.
- Stack: `DAILY` (dia a dia) e `BASIC` (conhecimento básico), via `T(nome, iniciais, categoria, descrição)`. As categorias ficam em `CATS`.
- Experiência, cursos e textos fixos: direto no `index.html`.
- Fotos novas: converta para WebP de até 1280px (`cwebp -q 72` ou Pillow) e salve em `assets/img/`.
