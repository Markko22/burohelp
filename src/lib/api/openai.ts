// Client-side API caller
export async function analyzePDFWithChatGPT(pdfBase64: string): Promise<string> {
  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pdfBase64 }),
    });

    if (!response.ok) {
      throw new Error('Analysis failed');
    }

    const data = await response.json();
    return data.analysis;
  } catch (error) {
    console.error("Error analyzing PDF:", error);
    throw new Error("Failed to analyze PDF");
  }
}