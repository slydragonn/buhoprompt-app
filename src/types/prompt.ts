export interface PromptData {
  id: string;
  title: string;
  description: string;
  initial: string;
  improved: string;
  userClerkId: string;
  templateId: string;
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface PromptUpdateValue {
  id: string;
  title: string;
  description: string;
  improved: string;
}

export interface PromptPostValue {
  title: string;
  description: string;
  initial: string;
  templateId: string;
}
