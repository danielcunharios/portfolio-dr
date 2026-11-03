# Daniel Rios · Portfólio

Portfólio pessoal de Daniel Rios, AI Builder em GTM, RevOps, Product, Sales e Dados.

## Rodar localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

Sem dependências e sem build: HTML, CSS e JavaScript puros. As fontes ficam em
`assets/fonts/` e são servidas pelo próprio site, então o portfólio não depende de
nenhum recurso externo para renderizar.

A pasta `tools/` guarda utilitários offline (hoje, o gerador dos logos). Eles
não entram no site nem rodam no deploy, e só precisam do Pillow para rodar.

## Publicação

A produção é servida pela Vercel em
[`https://daniel-rios-my-portfolio.vercel.app/`](https://daniel-rios-my-portfolio.vercel.app/).
O código-fonte está no repositório público
[`danielcunharios/portfolio-dr`](https://github.com/danielcunharios/portfolio-dr),
conectado ao remoto `origin`; a branch de publicação é `main`.
O domínio antigo `portfolio-dr-six.vercel.app` redireciona para o atual.

O site é estático e não requer build ou dependências. As imagens publicadas
foram fornecidas e autorizadas pelo autor.

## Editar conteúdo

O conteúdo fica em `assets/js/data.js` (contatos, cases, projetos e stack). A estrutura e os textos fixos ficam em `index.html`. As instruções completas para levar o site a produção estão em `CLAUDE.md`.
