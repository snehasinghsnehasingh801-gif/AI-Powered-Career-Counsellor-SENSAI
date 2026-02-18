import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "SENSAI", // Unique app ID
  name: "SENSAI",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
