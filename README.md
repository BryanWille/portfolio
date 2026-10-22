# Bryan Wille Souto Braga — Portfólio Profissional

Aplicação web do portfólio executivo e de engenharia de **Bryan Wille Souto Braga** — Cientista da Computação, Analista de Sistemas Pleno II na **Deloitte Consulting** e Pós-graduando em Engenharia de Inteligência Artificial e MLOps pela **PUC Minas**.

---

## 1. Arquitetura & Stack Técnica

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** 100% JavaScript Puro (ES6+ com `.js` / `.jsx` e `jsconfig.json` — Zero TypeScript)
- **Estilização:** Tailwind CSS 3.4
- **Tipografia (`next/font/google`):** `Plus Jakarta Sans` (títulos e leitura) + `JetBrains Mono` (metadados técnicos, tags e métricas)
- **Ícones & Animações:** `lucide-react` & `framer-motion`
- **Direção de Arte:** Editorial Suíço & Exclusivamente Light Mode (`#FAFAFA` Off-White, `#FFFFFF` Superfícies, `#E5E7EB` Bordas, `#111827` Grafite, `#4B5563` Ardósia, `#2563EB` Azul Cobalto e `#0F5338` Verde Floresta Editorial)

---

## 2. Estrutura de Diretórios

```text
├── jsconfig.json
├── next.config.mjs
├── netlify.toml
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.jsx
    │   └── page.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── HeroSection.jsx
    │   ├── ExperienceSection.jsx
    │   ├── FlagshipProjectsSection.jsx
    │   ├── EngineeringLabSection.jsx
    │   ├── PublicationsSection.jsx
    │   ├── SkillsMatrixSection.jsx
    │   └── Footer.jsx
    └── data/
        ├── profile.js
        ├── experience.js
        ├── projects.js
        ├── publications.js
        └── skills.js
```

---

## 3. Execução Local & Build de Produção

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev

# Gerar build otimizada de produção
npm run build

# Iniciar servidor de produção
npm run start
```
