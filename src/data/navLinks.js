// data/navLinks.js

const navLinks = [
  {
    label: "Services",
    subItems: [
      {
        label: "AI Development & Automation",
        subItems: [
         
          { label: "Intelligent Chatbots", href: "/solutions/ai/chatbots" },
          { label: "AI Agents & RAG", href: "/solutions/ai/agents" },
          { label: "Language Models (NLP)", href: "/solutions/ai/nlp" },
          { label: "Computer Vision Systems", href: "/solutions/ai/vision" },
          { label: "Predictive Analytics", href: "/solutions/ai/prediction" },
          { label: "Generative AI Tools", href: "/solutions/ai/generative" },
        ],
      },
      {
        label: "AI Ops & Tool Configurations",
        subItems: [
          { label: "n8n Workflow Setup", href: "/solutions/config/n8n" },
          { label: "Custom Integrations", href: "/solutions/config/integrations" },
          { label: "Toolchain Configuration", href: "/solutions/config/tools" },
          { label: "AI Dashboards", href: "/solutions/config/dashboards" },
        ],
      },
      {
        label: "Web Development Services",
        subItems: [
          { label: "Custom CMS Development", href: "/solutions/web/cms" },
          { label: "CRM Integration", href: "/solutions/web/crm" },
          { label: "Responsive UI/UX", href: "/solutions/web/uiux" },
          { label: "ERP configuration", href: "/solutions/web/performance" },
          { label: "Python Web Development", href: "/solutions/web/animation" },
        ],
      },
    ],
  },

  {
    label: "Industries",
    subItems: [
      { label: "Healthcare AI", href: "/industries/healthcare" },
      { label: "Finance Intelligence", href: "/industries/finance" },
      { label: "Retail Automation", href: "/industries/retail" },
      { label: "Smart Education", href: "/industries/education" },
      { label: "LegalTech & Compliance", href: "/industries/legal" },
    ],
  },

  {
    label: "Our Products",
    subItems: [
      { label: "Case Studies", href: "/showcase/cases" },
      { label: "Live Demos", href: "/showcase/demos" },
      { label: "Client Portfolio", href: "/showcase/clients" },
    ],
  },

  {
    label: "About VisionGen",
    subItems: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Vision", href: "/about/vision" },
      { label: "Our Mission", href: "/about/mission" },
      { label: "Team & Talent", href: "/about/team" },
      { label: "Careers", href: "/about/careers" },
    ],
  },

  // Optional future section
  {
    label: "Resources & Insights",
    subItems: [
      { label: "Blog Articles", href: "/insights/blog" },
      { label: "AI Playbooks", href: "/insights/playbooks" },
      { label: "FAQs", href: "/insights/faq" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default navLinks;
