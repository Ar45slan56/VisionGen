export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { message } = req.body;
  const userMsg = message?.toLowerCase().trim();

  if (!userMsg) {
    return res.status(400).json({ reply: "Please type a message." });
  }

  // 🔍 Intent-based keyword matching
  const responses = [
    {
      keywords: ["hello", "hi", "hey", "good morning", "good evening"],
      reply: "Hello! 👋 How can I assist you today?",
    },
    {
      keywords: ["price", "pricing", "cost", "plan"],
      reply: "You can explore our pricing plans on the /pricing page. Let me know if you need help choosing!",
    },
    {
      keywords: ["support", "help", "issue", "problem"],
      reply: "Our support team is available 24/7. You can reach us via live chat or email.",
    },
    {
      keywords: ["feature", "features", "capability"],
      reply: "Our AI Chatbots can automate support, generate leads, and improve user experience. Want a demo?",
    },
    {
      keywords: ["book", "call", "demo"],
      reply: "You can book a free demo by clicking the 'Book a Free Call' button on our website. 📅",
    },
    {
      keywords: ["bye", "goodbye", "see you"],
      reply: "Goodbye! Feel free to chat with me anytime. 😊",
    },
  ];

  let reply = null;

  for (const item of responses) {
    if (item.keywords.some((kw) => userMsg.includes(kw))) {
      reply = item.reply;
      break;
    }
  }

  // Default fallback
  if (!reply) {
    reply = "Hmm, I’m still learning how to respond to that. You can contact support for detailed help.";
  }

  // Simulate thinking delay
  await new Promise((r) => setTimeout(r, 500)); // optional: 0.5s delay

  res.status(200).json({ reply });
}
