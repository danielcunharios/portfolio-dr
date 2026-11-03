# Portfólio Daniel Rios · instruções para o Claude Code

Site pessoal de **Daniel Rios** (Daniel da Cunha Rios), AI Builder de Feira de Santana (BA), posicionado para vagas de GTM Engineering, RevOps, Product, Sales, Business Development e Dados.

O site já está pronto em conteúdo e design. O seu trabalho é **levá-lo a produção**: completar o que falta, endurecer o código e publicar. Não redesenhe nada sem o Daniel pedir.

## Estrutura

```
index.html            página única (home + página de stack via #stack)
assets/css/styles.css todo o CSS, com tokens de cor em :root (tema claro padrão, escuro via prefers-color-scheme e data-theme)
assets/js/data.js     CONTEÚDO: CONFIG (contatos), ICON, SOC, SCREENS (telas recriadas dos produtos), CASES, MORE, CATS, DAILY, BASIC
assets/js/main.js     lógica: render de cases, modal de case, galeria/lightbox, contatos, stack (busca e filtro), roteador por hash, abas, tema
assets/img/           mascote, favicon e fotos (WebP)
```

- HTML, CSS e JS puros. Sem build, sem framework. Mantenha assim, salvo se o Daniel pedir outra coisa.
- `data.js` e `main.js` são scripts clássicos: as constantes de `data.js` são globais e usadas por `main.js`. A ordem dos `<script>` importa.
- Rotas: `#stack` mostra a página de stack e esconde `<main>`. Qualquer outro hash rola até a seção na home.
- Identidade visual: preto e branco com **um** destaque azul (`--accent`). Fontes: Schibsted Grotesk (display), Instrument Sans (texto) e JetBrains Mono (rótulos).
- Idioma do site: português do Brasil.

## Regras

1. **Nunca invente fatos, números, cargos ou resultados.** Tudo que está no site foi confirmado pelo Daniel ou por fonte pública. Se faltar um dado, pergunte a ele.
2. Trechos com `class="todo"` (sublinhado azul tracejado) esperam dados do Daniel. Antes de publicar, preencha cada um com a resposta dele ou remova a frase.
3. As telas em `SCREENS` são recriações ilustrativas, legendadas como tal. Se o Daniel enviar prints reais, troque a recriação pela imagem e remova a legenda "Recriação ilustrativa".
4. Fotos com outras pessoas (LTEI e Trenby) só ficam no site público depois que o Daniel confirmar que elas autorizaram.
5. Mantenha acessibilidade: foco visível, `alt` nas imagens, `aria` nos controles e respeito a `prefers-reduced-motion`.

## Checklist de produção

### 1. Conteúdo e autorizações
- [x] Omitir dados não confirmados: curso/previsão, nível de inglês, hobbies, detalhes de automações, papéis/métricas incompletos de cases, resultados da AsterBela e número de membros da LTEI.
- [x] Remover a contagem conflitante de estudantes da Trenby até confirmar a fonte correta.
- [x] Remover a aba com os sete projetos da Just Travel até confirmar em quais o Daniel atuou e qual foi seu papel.
- [x] Remover a faixa "Protótipo", os estilos de pendência e o JavaScript associado.
- [x] Confirmar com o autor que as fotos da LTEI e da Trenby são de sua propriedade e podem ser publicadas.
- [ ] Só restaurar métricas, papéis e projetos omitidos com confirmação do Daniel.

### 2. SEO e compartilhamento
- [x] Criar `assets/img/og-cover.png` (1200×630) com o mascote, nome e posicionamento.
- [x] Configurar `canonical`, Open Graph, Twitter Cards e JSON-LD para `https://danielcunharios.github.io/portfolio-dr/`.
- [x] Criar `robots.txt`, `sitemap.xml` e `404.html`.
- [x] Confirmar palavras-chave de GTM, RevOps, Product, Sales, Business Development, Dados e IA nos metadados e no JSON-LD.

### 3. Qualidade do código
- [x] Rodar o site localmente por HTTP e checar o console sem erros, em desktop e em 375px, nos temas claro e escuro.
- [x] Confirmar IDs únicos, metadados JSON-LD válidos e caminhos relativos funcionais no subdiretório do Pages.
- [ ] Validar formalmente a conformidade do HTML.
- [ ] Lighthouse com meta de 90+ em Performance, Acessibilidade, Boas práticas e SEO. Corrija o que aparecer, por exemplo: `width` e `height` nas imagens para evitar layout shift, `loading="lazy"` abaixo da dobra, `fetchpriority="high"` no mascote do hero.
- [x] Verificar contraste AA dos textos e estados principais nos dois temas.
- [x] Testar teclado: foco no menu, abrir/fechar case com Escape, galeria com as setas e busca da stack.
- [ ] Testar os links externos (sites dos projetos, referências e redes). Todos precisam abrir em nova aba com `rel="noopener"`.
- [ ] Opcional: minificar CSS e JS no deploy, sem mudar os fontes.

### 4. Publicação
Destino escolhido: **GitHub Pages** em `https://danielcunharios.github.io/portfolio-dr/`.
- [x] Confirmar que as fotos da LTEI e da Trenby pertencem ao autor e podem ser publicadas.
- [x] Tornar público o repositório existente `danielcunharios/portfolio-dr`.
- [ ] Habilitar GitHub Pages para publicar a branch `main` a partir da raiz. O diretório local está conectado ao remoto `origin`; ainda não há commit inicial nem push.
- [ ] Peça confirmação ao Daniel antes de cada push.
- [ ] Se ele comprar um domínio (ex.: `danielrios.com.br`), criar o arquivo `CNAME`, orientar a configuração de DNS e ativar HTTPS no Pages.
- Alternativa: Vercel (`vercel --prod`), que ele já usa no dia a dia.

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
