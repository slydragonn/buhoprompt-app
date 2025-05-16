export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  prevContent: string;
  chatHistory: []; // [{req: "", res: ""}]
  model: 'chatgpt' | 'claude' | 'deepseek' | 'sora' | 'gemini';
  userId: string;
  templateId: string;
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}
