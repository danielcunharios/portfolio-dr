/* Conteúdo editável do site: contatos, cases, projetos e stack. */
const CONFIG = {
  linkedin:  "https://www.linkedin.com/in/daniel-rios-/",
  github:    "https://github.com/danielcunharios",
  instagram: "https://instagram.com/danrioss",
  x:         "https://x.com/danrioss1",
  whatsapp:  "5575998578250",
  email:     "danielcunharios@gmail.com"
};
const ICON = {
  linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm7 0h3.8v1.6h.06c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12v5.33h-4v-4.72c0-1.13-.02-2.58-1.57-2.58-1.58 0-1.82 1.23-1.82 2.5v4.8H10v-11Z"/></svg>',
  github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.2h1.7L7.4 4.7H5.58l11.09 14.5Z"/></svg>',
  whatsapp:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3 .78.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.15-1.17-.06-.1-.22-.16-.47-.29Z"/></svg>',
  email:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>'
};
const SOC = [
  {k:"linkedin",l:"LinkedIn",show:()=>"in/daniel-rios-"},
  {k:"github",l:"GitHub",show:u=>u.replace(/^https?:\/\/(www\.)?/,"")},
  {k:"instagram",l:"Instagram",show:u=>"@"+u.replace(/\/$/,"").split("/").pop()},
  {k:"x",l:"X",show:u=>"@"+u.replace(/\/$/,"").split("/").pop()},
  {k:"whatsapp",l:"WhatsApp",href:n=>"https://wa.me/"+n,show:()=>"(75) 99857-8250"},
  {k:"email",l:"E-mail",href:e=>"mailto:"+e,show:e=>e}
];

const SCREENS = {
foresail:`<div class="browser"><div class="bbar"><i></i><i></i><i></i><span>app.foresail.com.br/projetos/checkout-v2</span></div>
 <div class="fs"><aside><b>Foresail</b><span class="on"></span><span></span><span></span><span></span><span></span></aside>
 <main><div class="gauge"><svg viewBox="0 0 100 60"><path d="M10 55a40 40 0 0 1 80 0" fill="none" stroke="var(--surface-2)" stroke-width="10" stroke-linecap="round"/><path d="M10 55a40 40 0 0 1 66-30" fill="none" stroke="var(--accent)" stroke-width="10" stroke-linecap="round"/></svg><b>72</b><small>Risk Score</small></div>
 <div class="alerts"><div class="alert"><i style="background:#E5484D"></i>12 PRs sem revisão há 6 dias</div><div class="alert"><i style="background:#F2A23A"></i>Velocidade do squad caiu 18%</div><div class="alert"><i style="background:#E8C547"></i>3 tickets bloqueados no sprint</div></div>
 <div class="chat"><em>IA:</em> o score subiu porque as revisões travaram em 2 devs.</div></main></div></div>`,
travia:`<div class="browser"><div class="bbar"><i></i><i></i><i></i><span>Travia · Conversas</span></div>
 <div class="tv"><aside class="tv-list"><b>Leads de hoje</b>
  <div class="tv-lead on"><i></i><span>Lead #1042<small>Qualificado pela IA</small></span></div>
  <div class="tv-lead"><i></i><span>Lead #1041<small>Aguardando datas</small></span></div>
  <div class="tv-lead"><i></i><span>Lead #1039<small>Carrinho enviado</small></span></div></aside>
 <main class="tv-chat"><div class="msg in">Oi! Queria 4 noites em dezembro para 2 adultos.</div>
  <div class="msg out"><em>Agente de IA</em>Separei 3 hospedagens com preço real para essas datas. Quer incluir um passeio?</div>
  <div class="cart"><b>Carrinho montado pela IA</b><span>Hospedagem · 4 noites</span><span>Passeio guiado</span><button type="button" tabindex="-1">Enviar link de pagamento</button></div></main></div></div>`
};

/* Painéis de ícone para projetos sem imagem */
const ART = {
  kobi:{icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>', chips:["Processo de CS","Controle de churn","Relacionamento com a base"]},
  stage:{icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5M8 22h8"/></svg>', chips:["Empresários da região","Centenas de jovens","Inovação e tecnologia"]},
  bag:{icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>', chips:["Varejo","Vendas sem estoque","Primeiro time"]}
};

const JT_PROJECTS = [
  ["Travia","https://travia.me","SaaS · IA","Plataforma de vendas para o turismo: CRM, WhatsApp oficial e agente de IA que qualifica leads e monta o carrinho.",true],
  ["Digitrade","https://digitrade.embraturlab.com.br/","Embratur · Sebrae","Programa gratuito com workshops presenciais e aceleração individual para empreendedores do turismo venderem online, em 11 destinos do país.",false],
  ["Visite Morro do Chapéu","https://visitemorrodochapeu.com.br","Gov. da Bahia","Destino digital da Chapada Diamantina. Implantei em campo.",true],
  ["Visite Maraú","https://visitemarau.com","Prefeitura","Portal de promoção e venda da Península de Maraú. Implantei em campo.",true],
  ["Visite Praia do Forte","https://www.visitepraiadoforte.com.br/pt","Destino","Reservas de hospedagem, ingressos, carros e seguros do destino.",false],
  ["Come to Rio","https://reservas.come2rio.com/pt","Destino","Reservas de hospedagem, ingressos, carros e seguros para o Rio.",false],
  ["Come to Brazil","https://cometobrazil.justtraveltour.com/pt","Marca","Reservas com atendimento de consultores especialistas.",false]
];

const CASES = [
 { id:"trenby", cover:["assets/img/trenby-hub-feira-time.webp","Time da Trenby no Hub Feira",960,1280], title:"Trenby", year:"2022",
   role:"Fundador · edtech · nov 2022 a jan 2026",
   tags:[["win","Semifinalista Liga Jovem · Sebrae"],["","2 acelerações"],["","Edtech"]],
   pitch:"Edtech que recompensava estudantes de escola pública conforme o engajamento e a evolução nos estudos. Fundei aos 16 anos, ainda no ensino médio.",
   kpis:[["150+","alunos impactados na primeira escola pública adotante"],["2","acelerações: Novatores (UEFS) e Impactô ODS (Instituto Neoenergia)"]],
   stack:["Edtech","Gamificação","MVP com IA","Impacto social"], url:"https://trenby.com.br",
   recog:[["Semifinalista","Desafio Liga Jovem 2023 · Sebrae"],["Acelerada","Novatores · UEFS"],["Acelerada","Impactô ODS · Instituto Neoenergia"]],
   context:"Nasceu no ensino médio, da vontade de mudar como se aprende no Brasil. A ideia era usar recompensa e tecnologia para trazer o aluno de volta para a aula.",
   problem:"A tecnologia e os jovens mudaram, mas as aulas continuaram iguais, e o engajamento dos alunos de escola pública caía.",
   built:["MVP construído com IA e ferramentas prontas, que recompensava estudantes e professores conforme a evolução de aprendizagem","Primeira escola pública adotante, com mais de 150 alunos impactados","Semifinal do Desafio Liga Jovem 2023, competição nacional do Sebrae com o Instituto Ideias de Futuro, representando a Escola SESI José Carvalho","Aceleração no Novatores, programa da Agência de Inovação da UEFS","Aceleração no Impactô ODS, programa do Instituto Neoenergia com o Instituto Ekloos, com mentorias individuais e formações em captação de recursos"],
   result:"Mais de 150 alunos impactados, reconhecimento nacional e duas acelerações. O produto não escalou depois do MVP, mas abriu as portas que me levaram ao mercado.",
   refs:[["Agência Sebrae Bahia: Equipe Trenby entre os semifinalistas do Desafio Liga Jovem 2023","https://ba.agenciasebrae.com.br/cultura-empreendedora/bahia-garante-duas-vagas-na-final-do-desafio-liga-jovem/"],["Instituto Neoenergia: Trenby entre as selecionadas do Impactô ODS 2025","https://www.neoenergia.com/web/instituto-neoenergia/colaboracao-institucional/impact%C3%B4-ods-2025"],["Novatores: programa de aceleração da UEFS","https://novatores.uefs.br"]],
   photos:[["assets/img/trenby-hub-feira-time.webp","Time da Trenby no Hub Feira",960,1280],["assets/img/trenby-hub-feira-1.webp","Com a camisa da Trenby no Hub Feira",960,1280],["assets/img/trenby-hub-feira-2.webp","Hub Feira",960,1280]] },
 { id:"justtravel", cover:["assets/img/morro-chapada-equipe.webp","Equipe do Visite a Bahia em Morro do Chapéu, na Chapada Diamantina",1280,719], title:"Just Travel e Travia", year:"2024 – hoje",
   role:"Just Travel · estágio, AI & Automation e hoje Business Development",
   tags:[["live","no ar"],["win","ROI médio de 347,7%"],["","SaaS · IA · B2G"],["","Embratur · Sebrae"]],
   pitch:"Na Just Travel lidero o go-to-market da Travia, um SaaS de IA comercial para o turismo. Antes, automatizei operações com n8n e Python e implantei em campo destinos digitais com o Governo da Bahia.",
   kpis:[["347,7%","ROI médio das primeiras vendas da Travia (out/26)"],["3 mil+","passageiros gerados pelo Visite Morro do Chapéu"],["~200 h/mês","poupadas com vouchers automáticos (400+/mês)"],["60+","empreendedores impactados no destino"]],
   stack:["GTM","Arquitetura de receita","n8n","Python","CRM","WhatsApp API","B2G"], url:"https://travia.me",
   context:"A Just Travel é uma travel tech que une tecnologia e vendas no turismo. Além das plataformas de destino, a empresa realiza o Digitrade com a Embratur e o Sebrae: workshops presenciais e aceleração individual para empreendedores do turismo em 11 destinos do país, como Cavalcante (GO), Porto Alegre (RS), Alter do Chão (PA) e Cuiabá (MT). Entrei como estagiário em 2024, passei por automação com IA e hoje estou em Business Development.",
   problem:"Agências, destinos e empreendedores do turismo perdem vendas por atendimento lento, processos manuais e pouca presença digital.",
   built:["Travia (2026): responsável pela estratégia de produto, pela máquina de vendas e pela arquitetura de receita do novo SaaS de IA comercial para o turismo. Primeiras vendas poucas semanas após o lançamento oficial, com ROI médio de 347,7% em outubro de 2026","Visite Morro do Chapéu e Visite Maraú: implantei os projetos pessoalmente por meses, com mapeamento, capacitação e digitalização dos destinos, liderando a parte de produto junto com o time","Morro do Chapéu: mais de 60 empreendedores impactados, mais de 36 negócios mapeados e ativos online, mais de 3 mil passageiros gerados e ROI atingido em 8 meses","Automações com n8n e Python: qualificação inicial de leads integrada ao CRM (antes, pelo menos 20 minutos por lead), emissão automática de vouchers personalizados (400+ por mês, cerca de 30 minutos poupados em cada), notificação inteligente de vendas e cross-sell automático pelo WhatsApp","Fundraising da segunda rodada de investimentos, em contato com potenciais investidores, além de editais, competições de fomento à inovação e uma licitação"],
   result:"Um produto novo vendendo com ROI médio de 347,7%, dois destinos digitais implantados e centenas de horas de trabalho manual eliminadas por mês.",
   photos:[["assets/img/morro-chapada-equipe.webp","Equipe do Visite a Bahia em Morro do Chapéu, na Chapada Diamantina",1280,719],["assets/img/morro-lancamento-visite-a-bahia.webp","Lançamento oficial do Visite a Bahia · Morro do Chapéu",800,991],["assets/img/morro-time-just-travel.webp","Time da Just Travel no lançamento do Visite a Bahia",1280,720]],
   links:JT_PROJECTS },
 { id:"kobi", art:"kobi", title:"KOBI", year:"2024",
   role:"Operações → Customer Success Lead · São Paulo, remoto",
   tags:[["","IA para vendas imobiliárias"],["","Customer Success"]],
   pitch:"Startup de IA em que incorporadoras acompanham e reativam corretores parceiros pelo WhatsApp. Comecei em operações e assumi o Customer Success.",
   kpis:[["8 meses","de operações a liderança de CS"],["Churn","sob minha responsabilidade direta"]],
   stack:["Customer Success","Retenção","Operações","PaaS"], url:"https://www.usekobi.ai/",
   context:"Startup de São Paulo que usa IA para dar às incorporadoras visão em tempo real dos corretores parceiros.",
   problem:"Uma base de clientes em crescimento precisava de processo de sucesso do cliente e de controle de churn.",
   built:["Apoio às operações da plataforma e ao desenvolvimento do produto","Estruturação do processo de Customer Success e de relacionamento com os clientes","Responsável direto pelo controle de churn durante os meses em que liderei o setor"],
   result:"Processo de CS estruturado e churn acompanhado de perto por mim enquanto liderei o setor." },
 { id:"foresail", screen:"foresail", title:"Foresail", year:"2026",
   role:"Hackathon Growthway · líder do time",
   tags:[["live","no ar"],["win","3º de 30+ times"],["","SaaS · IA"]],
   pitch:"SaaS que conecta GitHub e ferramentas de gestão e usa IA para calcular, em tempo real, o risco de cada projeto de software. Liderei o time e a gestão do desenvolvimento.",
   kpis:[["48 h","da ideia à POC em produção"],["3º","lugar entre mais de 30 equipes"]],
   stack:["IA generativa","GitHub OAuth","Risk Score","Freemium"], url:"https://foresail.com.br",
   context:"Hackathon da Growthway, com 48 horas e mais de 30 equipes. Liderei um time de cinco pessoas e geri o desenvolvimento do produto.",
   problem:"Líderes técnicos só descobrem que um projeto vai atrasar quando o prazo já estourou. Os sinais existem (PRs parados, tickets bloqueados, queda de velocidade), mas ficam espalhados em várias ferramentas.",
   built:["Integração via OAuth com GitHub e ferramentas de gestão","Risk Score de 0 a 100 a partir de velocidade, revisões e bloqueios","Os 3 maiores riscos explicados em linguagem natural","Chat de IA para perguntar por que o score mudou","Página de vendas com planos Free e Pro"],
   result:"3º lugar entre mais de 30 equipes e produto em produção desde então.",
   learn:"Mostrar primeiro o que o usuário precisa ver (o score e os 3 alertas) fez a banca entender o produto em segundos." }
];
const MORE = [
 { id:"ltei", title:"LTEI · UNIFAN", year:"2026", url:"https://lteiunifan.com.br/", desc:"Primeira liga dos cursos de tecnologia da UNIFAN. Fundei, presido e organizo encontros com empresários para os 50+ membros.",
   role:"Fundador e presidente", context:"Primeira liga acadêmica dos cursos de tecnologia da UNIFAN (Engenharia de Software, Engenharia da Computação e ADS), voluntária e gratuita, com coordenação docente e diretoria de alunos.", problem:"Alunos de tecnologia tinham ideias e projetos, mas pouco contato com o mercado e nenhum espaço para transformá-los em negócio.",
   built:["Fundação da primeira liga dos cursos de tecnologia da instituição","Founder Talk: encontros com empresários de impacto para os mais de 50 membros","Market Sync: visitas e conexões com empresas e instituições","Journey: encontros práticos para validar e evoluir projetos","Radar de oportunidades com hackathons, editais e prêmios, e o site lteiunifan.com.br"],
   result:"Liga lançada em setembro de 2026, com mais de 50 membros. Em outubro fizemos o Founder Talk #01, com mais de 20 pessoas na sala.",
   photos:[["assets/img/ltei-founder-talk-01.webp","Founder Talk #01: membros da LTEI com o convidado",1280,720],["assets/img/ltei-founder-talk-abertura.webp","Abertura do Founder Talk #01",720,1280],["assets/img/ltei-founder-talk-convidado.webp","Apresentação do convidado do Founder Talk #01",720,1280]],
   stack:["Comunidade","Liderança","Eventos"] },
 { id:"creators", art:"stage", title:"Creators Teens · Mundo SENAI", year:"SENAI", desc:"Evento de inovação que organizei no ensino médio, com empresários da região e centenas de jovens.",
   role:"Organizador", context:"Evento realizado no SENAI Bahia, ainda no ensino médio.", problem:"Jovens tinham pouco acesso a conteúdo prático sobre inovação, tecnologia e empreendedorismo, e pouco contato com quem empreende.",
   built:["Organização do evento em um fim de semana","Reunião de empresários relevantes da região","Conteúdos sobre inovação, tecnologia e empreendedorismo"], result:"Centenas de jovens impactados em um fim de semana.", stack:["Eventos","Comunidade","Educação"] },
 { id:"descontaza", art:"bag", title:"Descontaza", year:"2021", desc:"Meu primeiro negócio, fundado aos 15 anos: soluções para pequenos lojistas e vendedores sem estoque.",
   role:"Fundador", context:"Meu primeiro negócio, fundado aos 15 anos.", problem:"Pequenos lojistas sem ferramentas para vender sem estoque.",
   built:["Definição de público-alvo e mapa de concorrentes","Estratégia de marketing e vendas com o time"], result:"Primeira experiência liderando um time do zero.", stack:["Varejo","Vendas"] }
];

/* ============ STACK ============ */
const CATS = {ia:"IA", build:"Build e código", auto:"Automação e atendimento", gtm:"Vendas, CRM e marketing", dados:"Dados e cloud", design:"Design", gestao:"Gestão e produtividade"};
const T = (n,m,c,d)=>({n,m,c,d});
const DAILY = [
 T("Claude","Cl","ia","Produto, código, análise e escrita"),
 T("ChatGPT","GP","ia","Pesquisa, escrita e prototipagem"),
 T("Gemini","Ge","ia","IA no Workspace · certificado Gemini Educator"),
 T("Replit","Rp","build","Apps e scripts rodando no navegador"),
 T("VS Code","VS","build","Editor de código dos meus projetos"),
 T("Lovable","Lv","build","MVPs de interface com IA"),
 T("v0","v0","build","Telas e componentes gerados com IA"),
 T("Vercel","Vc","build","Deploy de sites e apps"),
 T("Python","Py","build","Automações e scripts integrados ao n8n"),
 T("HTML","H5","build","Estrutura de páginas web"),
 T("CSS","CS","build","Estilo e layout responsivo"),
 T("JavaScript","JS","build","Interações e lógica no front-end"),
 T("n8n","n8","auto","Automações de leads, vouchers, vendas e WhatsApp"),
 T("Make","Mk","auto","Integrações entre ferramentas"),
 T("WhatsApp API Oficial","WA","auto","Atendimento e vendas no WhatsApp"),
 T("Chatwoot","Cw","auto","Central de atendimento omnichannel"),
 T("Pipedrive","Pd","gtm","CRM, pipeline e qualificação de leads"),
 T("RD Station","RD","gtm","Automação de marketing e gestão de leads"),
 T("Mautic","Mt","gtm","Automação de marketing open source"),
 T("Meta","Me","gtm","Anúncios e Business Suite"),
 T("LinkedIn","Li","gtm","Prospecção, social selling e marca pessoal"),
 T("Pipefy","Pf","gestao","Processos e fluxos operacionais"),
 T("Metabase","Mb","dados","Dashboards estratégicos de vendas e resultados"),
 T("SQL","SQ","dados","Consultas para análise de vendas no Metabase"),
 T("Figma","Fg","design","Protótipos e interfaces"),
 T("Google Workspace","GW","gestao","Docs, Planilhas, Drive e Meet"),
 T("Pacote Office","Of","gestao","Excel, Word e PowerPoint"),
 T("Slack","Sl","gestao","Comunicação do time"),
 T("Notion","No","gestao","Documentação e wikis"),
 T("ClickUp","CU","gestao","Gestão de projetos e tarefas"),
 T("Asana","As","gestao","Gestão de projetos e tarefas"),
 T("Jira","Ji","gestao","Sprints e backlog · Atlassian"),
 T("Trello","Tr","gestao","Quadros kanban · Atlassian"),
 T("Confluence","Cf","gestao","Base de conhecimento · Atlassian"),
 T("Loom","Lo","gestao","Vídeos curtos e demos assíncronas")
];
const BASIC = [
 T("Power BI","BI","dados","Dashboards e relatórios"),
 T("MySQL","My","dados","Banco de dados relacional"),
 T("PostgreSQL","PG","dados","Banco de dados relacional"),
 T("Redis","Rd","dados","Cache e filas em memória"),
 T("AWS","AW","dados","Cloud da Amazon"),
 T("Google Cloud","GC","dados","Cloud do Google"),
 T("Azure","Az","dados","Cloud da Microsoft"),
 T("Nekt","Nk","dados","Plataforma de dados e integrações"),
 T("HubSpot","Hs","gtm","CRM e automação de marketing"),
 T("Salesforce","SF","gtm","CRM corporativo"),
 T("Attio","At","gtm","CRM flexível baseado em dados"),
 T("Clay","Cy","gtm","Enriquecimento de leads e GTM"),
 T("Apollo","Ap","gtm","Base de contatos e sequências de prospecção"),
 T("Hunter.io","Hn","gtm","Busca e verificação de e-mails"),
 T("Grok","Gk","ia","Modelo de IA da xAI")
];
