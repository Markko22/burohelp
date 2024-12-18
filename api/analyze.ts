import OpenAI from "openai";
import type { VercelRequest, VercelResponse } from '@vercel/node';

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { pdfBase64 } = req.body;

    if (!pdfBase64) {
      return res.status(400).json({ error: 'PDF content is required' });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Analizza il documento PDF allegato e crea 6 bullet point così suddivisi: 1) oggetto del Bando 2) Descrizione sintetica del bando 3) Requisiti del Bando 4) Modalità e termini del Bando 5) Eventuale elenco allegati al Bando 6) Ulteriori informazioni utili del Bando",
            },
            {
              type: "image",
              image_url: {
                url: `data:application/pdf;base64,${pdfBase64}`,
              },
            },
          ],
        },
      ],
      max_tokens: 4096,
    });

    return res.status(200).json({ 
      analysis: response.choices[0]?.message?.content || "" 
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Analysis failed' });
  }
}