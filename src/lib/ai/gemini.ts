import { GoogleGenAI } from '@google/genai';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!process.env.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not configured');
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export default async function generateContent(content: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: content,
    });
    return response.text;
  } catch (error) {
    console.error('Error generating content:', error);
    return null;
  }
}
