export interface TemplateData {
  id: string;
  title: string;
  content: string;
  description: string;
  userClerkId: string;
  base: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TemplateCreateValue {
  title: string;
  content: string;
  description: string;
  base: string;
}

export interface TemplateUpdateValue {
  id: string;
  title: string;
  content: string;
  description: string;
}
