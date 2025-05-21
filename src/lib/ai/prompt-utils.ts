import { improveTemplate } from '../templates/improve';

export function getConfiguredPrompt(type: string, userMessage: string, promptContext: string) {
  let systemPrompt = '';
  let userPrompt = '';

  if (type === 'improve') {
    systemPrompt =
      improveTemplate +
      '\n\nPor favor, proporciona una versión mejorada de este prompt, y aplica los cambios que te pida el usuario.\n\n';

    userPrompt = `Prompt actual a mejorar:
"""
${promptContext}
"""
`;
  } else {
    systemPrompt = `Eres un asistente experto en prompt engineering. Ayudas a los usuarios a entender, analizar y mejorar sus prompts para modelos de IA.

Contexto del prompt actual:
"""
${promptContext}
"""

Restricciones:
 - Enfocate en responder dudas sobre el prompt actual, no te preocupes por otras cosas.

Responde de manera útil y concisa. Si el usuario pregunta sobre mejoras, proporciona sugerencias específicas y prácticas. Da respuestas muy cortas, que no pasen de 100 palabras.`;

    userPrompt = userMessage;
  }

  return { systemPrompt, userPrompt };
}
