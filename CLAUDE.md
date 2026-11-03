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
- **Ordem dos projetos:** 1. Trenby, 2. Just Travel e Travia, 3. KOBI, 4. Foresail (cases grandes em `CASES`), depois 5. LTEI, 6. Creators Teens · Mundo SENAI e 7. Descontaza (em `MORE`).
- **Imagens:** só as fotos que o Daniel enviar. Projetos sem foto usam painel de ícone (`ART`) ou tela recriada (`SCREENS`). Nunca deixe espaço vazio.
- **Não usar o mascote no bloco de contato** (ficava cortado). No hero ele deve aparecer inteiro, sem cortar a cabeça.
- URL de produção: **https://daniel-rios-my-portfolio.vercel.app/** (Vercel). Canonical, Open Graph, JSON-LD, robots e sitemap apontam para ela.
- O domínio anterior, `portfolio-dr-six.vercel.app`, era o nome automático antigo do projeto na Vercel e hoje responde 307 para o atual. Não o use em metadado nenhum.

## Dados confirmados (use como fonte)

- 20 anos (nasc. 26/10/2006). Fundou a Descontaza aos 15 e a Trenby aos 16.
- Formação: Técnico em TI pelo SENAI; Análise e Desenvolvimento de Sistemas na UNIFAN (ago/2026 a dez/2028). Inglês básico; não fala espanhol.
- Hobbies: jiu-jitsu, séries e filmes, jogos online, gastronomia e viagens.
- Just Travel: estágio (fundraising da 2ª rodada, editais, competições de fomento e 1 licitação) → AI & Automation (n8n e Python: qualificação de leads integrada ao CRM, antes 20+ min por lead; vouchers automáticos, 400+/mês, ~30 min cada; notificação inteligente de vendas; cross-sell pelo WhatsApp) → Business Development (GTM da Travia: estratégia de produto, máquina de vendas e arquitetura de receita; primeiras vendas com ROI médio de 347,7% em out/26). Implantou em campo o Visite Morro do Chapéu e o Visite Maraú (mapeamento, capacitação, digitalização, liderando produto).
- Visite Morro do Chapéu: 60+ empreendedores impactados, 36+ negócios mapeados e ativos online, 3 mil+ passageiros gerados, ROI em 8 meses.
- KOBI: estruturou o processo de CS e relacionamento; responsável direto pelo controle de churn.
- Foresail: hackathon da Growthway, 3º lugar; Daniel liderou o time e a gestão do desenvolvimento.
- Trenby: MVP com IA e ferramentas prontas; 1 escola pública como primeira adotante, 150+ alunos.
- LTEI: primeira liga dos cursos de tecnologia da UNIFAN; Daniel fundou e preside; 50+ membros.

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

### 3. Qualidade do código
- [x] Rodar o site localmente por HTTP e checar o console sem erros, em desktop e em 375px, nos temas claro e escuro.
- [x] Confirmar IDs únicos, metadados JSON-LD válidos e caminhos relativos funcionais no subdiretório do Pages.
- [x] Validar formalmente a conformidade do HTML. `index.html`, `404.html` e `styles.css` passam sem nenhum erro no validador Nu do W3C, incluindo o DOM já montado pelo JavaScript.
- [x] Lighthouse com meta de 90+ em Performance, Acessibilidade, Boas práticas e SEO. Medido no domínio atual (nov/2026): **Acessibilidade, Boas práticas e SEO em 100** e Performance entre **98 e 100** em três rodadas, com CLS 0. O que fechou a conta: fontes no próprio site com `preload` e fallbacks de métricas casadas, `preload` do mascote do hero, `loading="lazy"` nas capas dos cases e `width`/`height` em todas as imagens.
- Meça a Performance em produção **mais de uma vez**: o localhost esconde o CLS da troca de fonte, porque lá a fonte sempre chega antes da primeira pintura.
- [x] Verificar contraste AA dos textos e estados principais nos dois temas.
- [x] Testar teclado: foco no menu, abrir/fechar case com Escape, galeria com as setas e busca da stack.
- [x] Testar os links externos (sites dos projetos, referências e redes). Todos respondem e todos abrem em nova aba com `rel="noopener"`. **Exceção: `trenby.com.br` não resolve mais (domínio inexistente), então o link saiu do case e da experiência; o projeto continua no site.** Se o Daniel renovar o domínio, basta devolver `url` ao case `trenby` em `data.js` e o link na linha da Trenby no `index.html`.
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
