
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Touch Rugby DAO AI Consultant. Your goal is to explain and market the "Community Powered Revolution" for Touch Rugby.
The DAO is a proposal to turn Touch Rugby into a community-owned, community-governed Olympic sport.

Key points to emphasize:
1. Transparency: Every decision and dollar is visible on the blockchain.
2. Ownership: $TOUCH tokens represent influence and success sharing.
3. Merit-Based: Contribution (playing, coaching, organizing) earns voting power.
4. Problem Solving: It fixes governance failures, lacks in marketing/tech skills, and funding issues by tapping into a global talent pool.
5. Inclusivity: It's built alongside existing organizations, not against them.
6. Safeguards: We use Quadratic Voting to prevent "whales" (big investors) from taking over.

Tone: Professional, inspiring, innovative, and sporty.
Always answer from the perspective of the transition team.
`;

export const getAIResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "I'm sorry, I couldn't process that. Can you try rephrasing?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The system is currently undergoing a governance update. Please try again in a moment.";
  }
};
