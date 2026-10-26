const whatsappCommercialUrl =
  "https://api.whatsapp.com/send?phone=5531998191723&text=Ol%C3%A1%2C%20Bryan!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

export const profileData = {
  fullName: "Bryan Wille Souto Braga",
  name: "Bryan Wille",
  shortName: "Bryan Wille",
  role: "Engenharia de Soluções & Software",
  company: "Deloitte Consulting (Deloitte Touche Tohmatsu Limited)",
  location: "Belo Horizonte, MG · Atendimento Nacional & Remoto",
  email: "bryanelliw@gmail.com",
  phone: "+55 (31) 99819-1723",
  phoneRaw: "+5531998191723",
  whatsappUrl: whatsappCommercialUrl,
  photoUrl:
    "https://media.licdn.com/dms/image/v2/D4D03AQFNLkguL7Db-A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706217771950?e=1794441600&v=beta&t=-Tnr_UeLln0R0Jxt3HA9BvE3KGPwCKiZrQM_MU-Nd8U",
  links: {
    whatsapp: whatsappCommercialUrl,
    linkedin: "https://www.linkedin.com/in/bryanwille/",
    github: "https://github.com/bryanwille",
    email: "mailto:bryanelliw@gmail.com",
    noobie: "https://noobiefin.netlify.app/",
    bookie: "https://bookie-lib.netlify.app/dashboard",
  },
  hero: {
    badge: "DESENVOLVIMENTO WEB • AUTOMAÇÃO DE PROCESSOS • INTEGRAÇÃO DE APIS",
    title:
      "Falta de visibilidade, retrabalho manual ou sistemas que não se conversam?",
    subtitle:
      "Sou Bryan Wille, Cientista da Computação e líder técnico na líder global de consultoria. Crio sites, automações e integrações sob medida para destravar a eficiência da sua equipe e transformar sua presença online.",
    ctas: {
      whatsapp: {
        label: "Iniciar Projeto via WhatsApp ↗",
        href: whatsappCommercialUrl,
      },
      solutions: {
        label: "Ver Soluções na Prática ↓",
        href: "#solucoes",
      },
    },
  },
  solutions: [
    {
      id: "web-performance",
      tag: "01 · PRESENÇA DIGITAL & CONVERSÃO",
      title: "Sites & Aplicações Web de Alta Performance",
      focus:
        "Landing pages, sites institucionais, catálogos e portais corporativos.",
      differential:
        "Construção limpa em Next.js e Tailwind CSS, 95+ no Google PageSpeed, SEO técnico estruturado para buscas e 100% responsivo.",
      chips: ["Next.js & React", "95+ PageSpeed", "SEO Técnico", "Responsividade Total"],
    },
    {
      id: "process-automation",
      tag: "02 · EFICIÊNCIA OPERACIONAL",
      title: "Automação de Processos & Rotinas",
      focus: "Eliminação de tarefas manuais e repetitivas da equipe.",
      differential:
        "Scripts serverless em nuvem (AWS Lambda), webhooks, disparos automáticos no WhatsApp/e-mail e processamento autônomo de arquivos/dados.",
      chips: ["AWS Lambda", "Webhooks", "Bots & Alertas", "Processamento em Nuvem"],
    },
    {
      id: "api-integration",
      tag: "03 · ECOSSISTEMA CONECTADO",
      title: "Integração de Sistemas & APIs",
      focus:
        "Conectar o site ou sistema da empresa aos softwares existentes (CRM, ERP, gateways de pagamento, emissão fiscal).",
      differential:
        "Arquitetura limpa, sincronização segura em tempo real e fim do retrabalho manual entre sistemas.",
      chips: ["APIs REST", "Integração ERP/CRM", "Gateways de Pagamento", "Sincronização Real-Time"],
    },
    {
      id: "custom-saas",
      tag: "04 · PRODUTOS & GESTÃO INTERNA",
      title: "Sistemas Web & SaaS Sob Medida",
      focus:
        "Painéis administrativos (dashboards), controle de clientes, pedidos e finanças.",
      differential:
        "Modelagem em banco de dados relacional (PostgreSQL/Supabase), autenticação robusta e regras de negócio escaláveis.",
      chips: ["Dashboards & Painéis", "PostgreSQL / Supabase", "Autenticação Segura", "Arquitetura Escalável"],
    },
  ],
  authority: [
    {
      id: "enterprise-rigor",
      tag: "01 · PADRÃO CORPORATIVO",
      title: "Rigor de Nível Enterprise",
      description:
        "Atuação e liderança técnica em consultoria global de primeira linha, aplicando boas práticas de arquitetura corporativa diretamente no projeto da sua empresa.",
      highlight: "Liderança Técnica · Arquitetura Limpa",
    },
    {
      id: "proven-efficiency",
      tag: "02 · RESULTADOS AUDITÁVEIS",
      title: "Economia e Eficiência Comprovadas",
      description:
        "Histórico auditável de otimização de infraestrutura (-87,89% em custos de armazenamento na nuvem) e redução de tempo operacional (-20% de TMA em processos de atendimento).",
      highlight: "-87,89% Custo Cloud · -20% TMA Operacional",
    },
    {
      id: "engineering-foundation",
      tag: "03 · SEGURANÇA & ESCALABILIDADE",
      title: "Base Sólida de Engenharia",
      description:
        "Formação em Ciência da Computação e especialização em Engenharia de IA/MLOps: garantia de software escalável, banco de dados bem desenhado e segurança técnica contra falhas e invasões.",
      highlight: "Ciência da Computação · Pós em IA & MLOps",
    },
    {
      id: "consultative-profile",
      tag: "04 · PARCERIA TRANSPARENTE",
      title: "Comunicação Direta & Perfil Consultivo",
      description:
        "Nível de inglês C1 e experiência com stakeholders corporativos: alinhamento claro de escopo, prazos transparentes e código documentado. Sem jargões confusos e sem abandono de projeto.",
      highlight: "Escopo Claro · Prazos Reais · Inglês C1",
    },
  ],
  education: [
    {
      institution: "Pontifícia Universidade Católica de Minas Gerais (PUC Minas)",
      credential: "Pós-graduação Lato Sensu em Engenharia de Inteligência Artificial e MLOps",
      period: "Abril de 2026 – Outubro de 2027",
      status: "Em andamento",
      description:
        "Especialização avançada em pipelines de dados, orquestração de Machine Learning, governança de modelos preditivos, Docker, Prefect e infraestrutura em nuvem.",
    },
    {
      institution: "Centro Universitário Dom Helder (Escola Superior Dom Helder Câmara)",
      credential: "Bacharelado em Ciência da Computação",
      period: "Janeiro de 2021 – Dezembro de 2024",
      status: "Concluído",
      description:
        "Formação sólida em algoritmos, estruturas de dados clássicas, teoria dos grafos, compressão sem perdas (LZW/PGM), programação orientada a objetos e matemática computacional.",
    },
  ],
};
