export const kpiBanners = [
  {
    id: "tma-reduction",
    metric: "-20% no TMA",
    subtitle: "Tempo de Atendimento",
    description:
      "Sistema CSC desenvolvido e implantado in loco na Deloitte para grande operação de atendimento ao cliente.",
    accent: "emerald",
  },
  {
    id: "aws-cost",
    metric: "-87,89% em Custo",
    subtitle: "Armazenamento Cloud",
    description:
      "Arquitetura serverless desenhada na AWS (Lambda + S3) para compactação e ciclo de vida de imagens.",
    accent: "amber",
  },
  {
    id: "tech-lead",
    metric: "Liderança & 4 Promoções",
    subtitle: "Ascensão até Pleno III",
    description:
      "Ascensão contínua na Deloitte até Pleno III, assumindo arquitetura e liderança de squad com 4+ desenvolvedores.",
    accent: "blue",
  },
  {
    id: "english-c1",
    metric: "Inglês C1 Avançado",
    subtitle: "EF SET Certified",
    description:
      "Fluência conversacional para condução técnica de reuniões, alinhamentos e projetos com clientes globais.",
    accent: "indigo",
  },
];

export const experienceData = [
  {
    id: "deloitte",
    company: "Deloitte Touche Tohmatsu Limited",
    period: "Jan 2024 – Presente",
    location: "Belo Horizonte, MG · Clientes Nacionais & Globais",
    current: true,
    roleTitle: "Analista de Sistemas Pleno III · Líder Técnico Salesforce & Desenvolvedor",
    progressionText: "Pleno III (Atual) ← Pleno I ← Júnior III ← Júnior II (4 promoções consecutivas)",
    roles: [
      {
        title: "Analista de Sistemas Pleno III · Líder Técnico",
        period: "Atual",
        current: true,
      },
      {
        title: "Analista de Sistemas Pleno I",
        period: "Ago 2025 – Fev 2026",
        current: false,
      },
      {
        title: "Analista de Sistemas Júnior III",
        period: "Ago 2024 – Ago 2025",
        current: false,
      },
      {
        title: "Analista de Sistemas Júnior II",
        period: "Jan 2024 – Ago 2024",
        current: false,
      },
    ],
    bullets: [
      {
        label: "Liderança Técnica no Varejo de Moda",
        text: "Atuação como Líder Técnico da plataforma Salesforce de atendimento de uma das maiores varejistas de moda do Brasil, orientando tecnicamente um time de mais de 4 desenvolvedores e sendo responsável direto pelas decisões de arquitetura de software, code review, boas práticas e desenho das soluções.",
      },
      {
        label: "Grandes Contas Globais",
        text: "Experiência com sustentação e desenvolvimento crítico para uma das maiores empresas de saúde do mundo e para uma multinacional líder no setor de geração de energia.",
      },
      {
        label: "Excelência Técnica Salesforce",
        text: "Desenvolvimento avançado de componentes Lightning Web Components (LWC), automações de alta escala com Apex e Flow Builder, além de integrações seguras via APIs REST, SOQL e Credenciais Nomeadas.",
      },
      {
        label: "Governança & Agilidade",
        text: "Gestão de esteiras de deploy, documentação rigorosa de GMUD, cerimônias Scrum e atuação em inglês conversacional com stakeholders.",
      },
    ],
    tags: [
      "Liderança Técnica",
      "Arquitetura de Software",
      "Salesforce (LWC/Apex)",
      "APIs REST",
      "Varejo de Moda",
      "Saúde & Energia",
      "Inglês C1",
      "Scrum",
    ],
  },
  {
    id: "loja-do-sapo",
    company: "Loja do Sapo",
    period: "Out 2022 – Jan 2024",
    location: "Belo Horizonte, MG",
    current: false,
    roleTitle: "Desenvolvedor Full-Stack (Evolução de Estágio para Desenvolvedor)",
    progressionText: "Desenvolvedor Full-Stack ← Estagiário de Desenvolvimento",
    roles: [
      {
        title: "Desenvolvedor Full-Stack",
        period: "Mar 2023 – Jan 2024",
        current: false,
      },
      {
        title: "Estagiário de Desenvolvimento",
        period: "Out 2022 – Mar 2023",
        current: false,
      },
    ],
    bullets: [
      {
        label: "Otimização Cloud Serverless",
        text: "Projeto e implementação da integração do Zoho Creator com AWS Lambda e S3 (Python + Pillow), reduzindo o armazenamento em nuvem em até 87,89% sem perda de nitidez das vistorias.",
      },
      {
        label: "Integração de ERP & Negócios",
        text: "Integração bidirecional do Zoho com o ERP Omie e gateways, automatizando cadastros de produtos e ordens de serviço via Python.",
      },
      {
        label: "Automação & BI",
        text: "Criação de scripts em Google Apps Script (JavaScript) e dashboards analíticos de produtividade e vendas em Google Looker Studio.",
      },
    ],
    tags: [
      "AWS (Lambda & S3)",
      "Python",
      "Zoho Creator",
      "ERP Omie",
      "JavaScript",
      "APIs REST",
    ],
  },
  {
    id: "iobh",
    company: "IOBH – Instituto de Olhos de Belo Horizonte",
    period: "Jan 2022 – Out 2022",
    location: "Belo Horizonte, MG",
    current: false,
    roleTitle: "Suporte de TI & Desenvolvimento Interno",
    progressionText: "Auxiliar de Suporte ← Estagiário de Suporte TI",
    roles: [
      {
        title: "Auxiliar de Suporte",
        period: "Ago 2022 – Out 2022",
        current: false,
      },
      {
        title: "Estagiário de Suporte TI",
        period: "Jan 2022 – Ago 2022",
        current: false,
      },
    ],
    bullets: [
      {
        label: null,
        text: "Desenvolvimento de ferramenta desktop em C# / .NET para automatização e geração de relatórios operacionais.",
      },
      {
        label: null,
        text: "Criação de queries e rotinas de extração em banco de dados SQL Server.",
      },
      {
        label: null,
        text: "Sustentação de servidores, redes internas (DHCP, Active Directory, VPN) e apoio a sistemas hospitalares (Pixeon Smart).",
      },
    ],
    tags: [
      "C# / .NET",
      "SQL Server",
      "Infraestrutura & Redes",
      "Active Directory",
    ],
  },
];

export const educationAndCertifications = {
  education: [
    {
      title: "Pós-Graduação em Engenharia de IA e MLOps",
      institution: "PUC Minas",
      period: "Previsão: Out/2027",
      status: "Em andamento",
    },
    {
      title: "Bacharel em Ciência da Computação",
      institution: "Centro Universitário Dom Helder",
      period: "Concluído: 2021 – 2024",
      status: "Concluído",
    },
  ],
  certifications: [
    {
      title: "Certificação EF SET Inglês C1 Avançado",
      subtitle: "Proficiência Eficaz comprovada para negócios (Jan/2026)",
      badge: "C1 ADVANCED",
      featured: true,
    },
    {
      title: "Capacitações Oficiais",
      subtitle: "AWS Academy, Programação Orientada a Objetos com Java e Análise de Dados.",
      badge: "CERTIFICADO",
      featured: false,
    },
  ],
};

export const technicalSkillsClusters = [
  {
    category: "Salesforce & Arquitetura",
    skills: [
      "Apex",
      "Lightning Web Components (LWC)",
      "Flow Builder",
      "SOQL",
      "Credenciais Nomeadas",
      "GMUD",
      "Arquitetura de Soluções",
    ],
    dotColor: "bg-blue-600",
  },
  {
    category: "Linguagens & Engenharia",
    skills: [
      "Python",
      "JavaScript (ES6+)",
      "Java",
      "C++",
      "Dart / Flutter",
      "C#",
      "POO Pura",
    ],
    dotColor: "bg-emerald-600",
  },
  {
    category: "Cloud, DevOps & Dados",
    skills: [
      "AWS (Lambda, S3)",
      "Docker",
      "Prefect 3",
      "Scikit-learn",
      "Zoho Creator",
      "APIs REST",
      "Git / GitHub",
    ],
    dotColor: "bg-amber-600",
  },
  {
    category: "Bancos de Dados & BI",
    skills: [
      "PostgreSQL",
      "SQL Server",
      "Cloud Firestore",
      "Google Looker Studio",
    ],
    dotColor: "bg-indigo-600",
  },
];

