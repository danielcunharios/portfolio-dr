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
morro:`<div class="browser"><div class="bbar"><i></i><i></i><i></i><span>visitemorrodochapeu.com.br</span></div>
 <div class="vs-hero"><h4>Visite Morro do Chapéu</h4><svg viewBox="0 0 400 80" preserveAspectRatio="none"><path d="M0 80V48l50-22 40 14 60-34 50 30 45-12 55 24 50-16 50 20v28Z" fill="#4A2A3F"/><path d="M0 80V62l70-14 60 10 80-20 70 16 60-8 60 14v20Z" fill="#2B1A2C"/></svg></div>
 <div class="vs-search"><div><small>Destino</small>Chapada Diamantina</div><div><small>Check-in</small>12 dez</div><div><small>Hóspedes</small>2 adultos</div><button type="button" tabindex="-1">Buscar</button></div>
 <div class="vs-grid"><div class="vs-card"><div class="ph" style="background:linear-gradient(135deg,#8C6A4F,#C99A6B)"></div><div>Pousada<small>Hospedagem local</small></div></div><div class="vs-card"><div class="ph" style="background:linear-gradient(135deg,#3E7A5B,#8FB97A)"></div><div>Trilha guiada<small>Guia certificado</small></div></div><div class="vs-card"><div class="ph" style="background:linear-gradient(135deg,#B0512E,#E59A5B)"></div><div>Restaurante<small>Gastronomia</small></div></div></div></div>`,
sprints:`<div class="browser"><div class="bbar"><i></i><i></i><i></i><span>sprints-5w2h · Sprint 2</span></div>
 <div class="kb"><div class="kb-col"><b>A fazer <span>3</span></b><div class="kb-card">Definir landing do evento<div class="w"><span>WHAT</span><span>WHO</span><span>WHEN</span></div></div><div class="kb-card">Orçar coffee break<div class="w"><span>HOW MUCH</span></div></div></div>
 <div class="kb-col"><b>Fazendo <span>2</span></b><div class="kb-card">Convidar palestrantes<div class="w"><span>WHY</span><span>WHO</span></div></div><div class="kb-card block">Reservar auditório<div class="w"><span>BLOQUEIO</span></div></div></div>
 <div class="kb-col"><b>Feito <span>4</span></b><div class="kb-card">Criar identidade<div class="w"><span>WHERE</span><span>HOW</span></div></div><div class="kb-card">Abrir inscrições<div class="w"><span>WHEN</span></div></div></div></div></div>`
};

const CASES = [
 { id:"foresail", screen:"foresail", title:"Foresail", year:"2026",
   role:"Hackathon · time de 5 pessoas",
   tags:[["live","no ar"],["win","3º de 30+ times"],["","SaaS · IA"]],
   pitch:"SaaS que conecta GitHub e ferramentas de gestão e usa IA para calcular, em tempo real, o risco de cada projeto de software.",
   kpis:[["48 h","da ideia à POC em produção"],["R$ 19","plano Pro, além do plano grátis"]],
   stack:["IA generativa","GitHub OAuth","Risk Score","Freemium"], url:"https://foresail.com.br",
   context:"Hackathon de 48 horas com mais de 30 equipes. O desafio era resolver um problema real de times de tecnologia.",
   problem:"Líderes técnicos só descobrem que um projeto vai atrasar quando o prazo já estourou. Os sinais existem (PRs parados, tickets bloqueados, queda de velocidade), mas ficam espalhados em várias ferramentas.",
   built:["Integração via OAuth com GitHub e ferramentas de gestão","Risk Score de 0 a 100 a partir de velocidade, revisões e bloqueios","Os 3 maiores riscos explicados em linguagem natural","Chat de IA para perguntar por que o score mudou","Página de vendas com planos Free e Pro"],
   result:"3º lugar entre mais de 30 equipes e produto em produção desde então.",
   learn:"Mostrar primeiro o que o usuário precisa ver (o score e os 3 alertas) fez a banca entender o produto em segundos." },
 { id:"morro", screen:"morro", title:"Visite Morro do Chapéu", year:"2025",
   role:"Just Travel × Governo da Bahia · implantação em campo",
   tags:[["live","no ar"],["","B2G"],["","Marketplace de turismo"]],
   pitch:"Plataforma que coloca hospedagem, gastronomia, experiências e guias da Chapada Diamantina à venda para turistas do Brasil e do exterior.",
   kpis:[["3 meses","em campo, da capacitação ao lançamento"],["400 mil+","de alcance com influenciadores no lançamento"]],
   stack:["Marketplace","Go-to-market","Parcerias públicas","Capacitação"], url:"https://visitemorrodochapeu.com.br",
   context:"Projeto Visite a Bahia, executado pela Just Travel com a Secretaria de Desenvolvimento Econômico, a Secretaria de Turismo e a Prefeitura de Morro do Chapéu.",
   problem:"Pequenos empreendedores do turismo local não vendiam online e ficavam fora do radar de quem planeja uma viagem.",
   built:["Implantação da plataforma no destino, morando três meses na cidade","Capacitação e certificação do trade com Senac, Sebrae, Banco do Nordeste e Desenbahia","Lançamento com influenciadores somando mais de 400 mil seguidores","Modelo replicável para outros destinos da Bahia"],
   result:"Em poucos dias no ar: leads qualificados, milhares de visualizações orgânicas e as primeiras vendas, incluindo reservas internacionais.",
   learn:"Tecnologia só vende num destino quando quem está na ponta sabe operar. A capacitação pesou tanto quanto o produto." },
 { id:"sprints", screen:"sprints", title:"Sprints 5W2H", year:"2026",
   role:"Produto próprio · do banco de dados à interface",
   tags:[["","Web app"],["","Gestão"],["","Supabase"]],
   pitch:"App de gestão de sprints em que cada tarefa nasce com as perguntas do 5W2H, além de bloqueios, avisos e chat do time.",
   kpis:[["5","pessoas usando"],["11","tabelas com segurança por linha"]],
   stack:["Supabase","PostgreSQL","RLS","Multi-organização"], url:"",
   problem:"Ferramentas comuns de tarefa não obrigam o time a responder o que, por quê, quem, quando, onde, como e quanto, e as tarefas ficam vagas.",
   built:["Organizações, membros e perfis com segurança por linha (RLS)","Sprints, tarefas, conclusões e registro de bloqueios","Mural de avisos e mensagens com controle de leitura"],
   result:"Em uso por 5 pessoas.",
   learn:"Colocar o método dentro do produto muda o comportamento do time mais do que treinar o método." }
];
const MORE = [
 { id:"trenby", em:"Tr", title:"Trenby", year:"2022", url:"https://trenby.com.br",
   desc:"Edtech que recompensava estudantes pelo engajamento. Semifinal no Desafio Liga Jovem do Sebrae e duas acelerações.",
   role:"Fundador · edtech · nov 2022 a jan 2026",
   recog:[["Semifinalista","Desafio Liga Jovem 2023 · Sebrae"],["Acelerada","Novatores · UEFS"],["Acelerada","Impactô ODS · Instituto Neoenergia"]],
   context:"Nasceu no ensino médio, da vontade de mudar como se aprende no Brasil. A ideia era usar recompensa e tecnologia para trazer o aluno de volta para a aula.",
   problem:"A tecnologia e os jovens mudaram, mas as aulas continuaram iguais, e o engajamento dos alunos de escola pública caía.",
   built:["MVP que recompensava estudantes e professores conforme a evolução de aprendizagem","Pilotos em escolas públicas","Semifinal do Desafio Liga Jovem 2023, competição nacional do Sebrae com o Instituto Ideias de Futuro, representando a Escola SESI José Carvalho","Aceleração no Novatores, programa da Agência de Inovação da UEFS","Aceleração no Impactô ODS, programa do Instituto Neoenergia com o Instituto Ekloos, com mentorias individuais e formações em captação de recursos"],
   result:"Reconhecimento nacional e duas acelerações. O produto não escalou depois do MVP, mas abriu as portas que me levaram ao mercado.",
   refs:[["Agência Sebrae Bahia: Equipe Trenby entre os semifinalistas do Desafio Liga Jovem 2023","https://ba.agenciasebrae.com.br/cultura-empreendedora/bahia-garante-duas-vagas-na-final-do-desafio-liga-jovem/"],["Instituto Neoenergia: Trenby entre as selecionadas do Impactô ODS 2025","https://www.neoenergia.com/web/instituto-neoenergia/colaboracao-institucional/impact%C3%B4-ods-2025"],["Novatores: programa de aceleração da UEFS","https://novatores.uefs.br"],["Site da Trenby","https://trenby.com.br"]],
   photos:[["assets/img/trenby-hub-feira-time.webp","Time da Trenby no Hub Feira, em Feira de Santana",960,1280],["assets/img/trenby-hub-feira-1.webp","Com a camisa da Trenby no Hub Feira",960,1280],["assets/img/trenby-hub-feira-2.webp","Hub Feira, Feira de Santana",960,1280]],
   stack:["Edtech","Gamificação","MVP","Impacto social"] },
 { id:"ltei", em:"LT", title:"LTEI · UNIFAN", year:"2026", url:"https://lteiunifan.com.br/", desc:"Liga gratuita que conecta alunos de tecnologia a empreendedores, empresas e oportunidades.",
   role:"Fundador e presidente", context:"Liga estudantil voluntária dos cursos de Engenharia de Software, Engenharia da Computação e ADS da UNIFAN, em Feira de Santana, com coordenação docente e diretoria de alunos.", problem:"Alunos de tecnologia tinham ideias e projetos, mas pouco contato com o mercado e nenhum espaço para transformá-los em negócio.",
   built:["Founder Talk: conversas com empreendedores do mercado","Market Sync: visitas e conexões com empresas e instituições","Journey: encontros práticos para validar e evoluir projetos","Radar de oportunidades com hackathons, editais e prêmios","Vitrine de projetos e vagas da rede, e o site lteiunifan.com.br"],
   result:"Liga lançada em setembro de 2026 com seis fundadores e apoio da coordenação. Em outubro fizemos o Founder Talk #01, com mais de 20 pessoas na sala.",
   photos:[["assets/img/ltei-founder-talk-01.webp","Founder Talk #01: membros da LTEI com o convidado, na UNIFAN",1280,720],["assets/img/ltei-founder-talk-abertura.webp","Abertura do Founder Talk #01",720,1280],["assets/img/ltei-founder-talk-convidado.webp","Apresentação do convidado do Founder Talk #01",720,1280]],
   stack:["Comunidade","Liderança","Eventos"] },
 { id:"asterbela", em:"AB", title:"AsterBela", year:"2026", desc:"Loja de moda feminina com catálogo no WhatsApp e programa de indicação.",
   role:"Fundador · Feira de Santana", context:"Negócio próprio de moda, registrado como MEI.", problem:"Vender moda localmente sem depender de loja física.",
   built:["Catálogo e grupo de ofertas no WhatsApp","5% na primeira compra em troca de contato","15% de desconto para quem indica"], stack:["E-commerce","Growth","WhatsApp"] },
 { id:"descontaza", em:"Dz", title:"Descontaza", year:"2021", desc:"Startup de varejo para pequenos lojistas e vendedores sem estoque.",
   role:"Fundador", context:"Meu primeiro negócio.", problem:"Pequenos lojistas sem ferramentas para vender sem estoque.",
   built:["Público-alvo e mapa de concorrentes","Estratégia de marketing e vendas com o time"], result:"Primeira experiência liderando um time do zero.", stack:["Varejo","Vendas"] }
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
 T("Python","Py","build","Scripts, automações e dados"),
 T("HTML","H5","build","Estrutura de páginas web"),
 T("CSS","CS","build","Estilo e layout responsivo"),
 T("JavaScript","JS","build","Interações e lógica no front-end"),
 T("n8n","n8","auto","Fluxos de automação e agentes de IA"),
 T("Make","Mk","auto","Integrações entre ferramentas"),
 T("WhatsApp API Oficial","WA","auto","Atendimento e vendas no WhatsApp"),
 T("Chatwoot","Cw","auto","Central de atendimento omnichannel"),
 T("Pipedrive","Pd","gtm","CRM e pipeline de vendas"),
 T("RD Station","RD","gtm","Automação de marketing e gestão de leads"),
 T("Mautic","Mt","gtm","Automação de marketing open source"),
 T("Meta","Me","gtm","Anúncios e Business Suite"),
 T("LinkedIn","Li","gtm","Prospecção, social selling e marca pessoal"),
 T("Pipefy","Pf","gestao","Processos e fluxos operacionais"),
 T("Metabase","Mb","dados","Dashboards e consultas de dados"),
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
 T("PostgreSQL","PG","dados","Banco relacional, usado com Supabase"),
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
