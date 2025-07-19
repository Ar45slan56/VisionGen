import {
  FiMessageSquare,
  FiZap,
  FiBookOpen,
  FiCpu,
  FiSliders,
  FiSettings,
  FiLink,
  FiPieChart,
  FiGrid,
  FiLayers,
  FiCode,
} from "react-icons/fi";

const servicesData = [
  {
    category: "AI Development & Automation",
    services: [
      {
        title: "Intelligent Chatbots",
        description: "Build multilingual bots using LLMs and NLP for lead gen and real-time customer support.",
        icon: FiMessageSquare,
        href: "/solutions/ai/chatbots",
      },
      {
        title: "AI Agents & RAG",
        description: "Deploy autonomous agents with memory, planning, and retrieval-augmented generation logic.",
        icon: FiZap,
        href: "/solutions/ai/agents",
      },
      {
        title: "Language Models (NLP)",
        description: "Use NLP techniques for classification, search, and semantic understanding across platforms.",
        icon: FiBookOpen,
        href: "/solutions/ai/nlp",
      },
      {
        title: "Computer Vision Systems",
        description: "Detect and segment visual data using CNNs, YOLO, and custom-trained models for image workflows.",
        icon: FiCpu,
        href: "/solutions/ai/vision",
      },
      {
        title: "Predictive Analytics",
        description: "Forecast trends using ML pipelines, regression models, and business metric analysis.",
        icon: FiSliders,
        href: "/solutions/ai/prediction",
      },
      {
        title: "Generative AI Tools",
        description: "Integrate text, image, and audio generation tools including GPT, DALL·E, and Whisper.",
        icon: FiBookOpen,
        href: "/solutions/ai/generative",
      },
    ],
  },

  {
    category: "AI Ops & Tool Configurations",
    services: [
      {
        title: "n8n Workflow Setup",
        description: "Automate logic and services with custom n8n flows, triggers, and data integrations.",
        icon: FiSettings,
        href: "/solutions/config/n8n",
      },
      {
        title: "Custom Integrations",
        description: "Connect external systems using APIs, webhooks, and modular n8n-compatible adapters.",
        icon: FiLink,
        href: "/solutions/config/integrations",
      },
      {
        title: "Toolchain Configuration",
        description: "Setup AI services, environment configs, and orchestration layers for scalable deployment.",
        icon: FiSliders,
        href: "/solutions/config/tools",
      },
      {
        title: "AI Dashboards",
        description: "Design real-time dashboards to visualize metrics, predictions, and user activity.",
        icon: FiPieChart,
        href: "/solutions/config/dashboards",
      },
    ],
  },

  {
    category: "Web Development Services",
    services: [
      {
        title: "Custom CMS Development",
        description: "Build scalable content systems with dynamic routing, permissions, and extensible schemas.",
        icon: FiGrid,
        href: "/solutions/web/cms",
      },
      {
        title: "CRM Integration",
        description: "Connect lead funnels, client portals, and real-time sync with major CRM platforms.",
        icon: FiLayers,
        href: "/solutions/web/crm",
      },
      {
        title: "Responsive UI/UX",
        description: "Deliver polished interfaces using React, Next.js, Tailwind, and accessibility-first design.",
        icon: FiCode,
        href: "/solutions/web/uiux",
      },
      {
        title: "ERP Configuration",
        description: "Customize and deploy enterprise resource systems connected to core workflows and analytics.",
        icon: FiSliders,
        href: "/solutions/web/performance",
      },
      {
        title: "Python Web Development",
        description: "Build fast APIs, automation tools, and backend services with Django, Flask, and FastAPI.",
        icon: FiZap,
        href: "/solutions/web/animation",
      },
    ],
  },
];

export default servicesData;
