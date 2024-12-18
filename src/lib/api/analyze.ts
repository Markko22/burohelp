import { ENDPOINTS } from '@/config/constants';
import { getSignedUrl } from './storage';

interface AnalyzeResponse {
  status: string;
  message?: string;
}

interface AnalyzePayload {
  fileUrl: string;
  fileName: string;
  timestamp: string;
}

async function sendToWebhook(payload: AnalyzePayload): Promise<Response> {
  const response = await fetch(ENDPOINTS.MAKE_WEBHOOK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
  }

  return response;
}

export async function analyzePDF(filePath: string): Promise<AnalyzeResponse> {
  try {
    const signedUrl = await getSignedUrl(filePath);
    const fileName = filePath.split('/').pop() || 'unknown';
    
    const payload: AnalyzePayload = {
      fileUrl: signedUrl,
      fileName,
      timestamp: new Date().toISOString(),
    };

    await sendToWebhook(payload);
    return { status: 'success', message: 'Analysis started' };
  } catch (error) {
    console.error('Error analyzing PDF:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to analyze PDF');
  }
}