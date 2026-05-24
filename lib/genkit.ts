// src/lib/genkit.ts
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

// Initialize the core system
export const ai = genkit({
  plugins: [googleAI()],
  model: 'gemini-2.0-flash',
});

// NOTE: Security audit flow has been removed.