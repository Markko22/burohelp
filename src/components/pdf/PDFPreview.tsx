import { FileText, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PDFPreviewProps {
  fileName: string;
  onAnalyze: () => void;
  isAnalyzing: boolean;
  buttonText: string;
}

export function PDFPreview({ fileName, onAnalyze, isAnalyzing, buttonText }: PDFPreviewProps) {
  return (
    <div className="border rounded-lg p-6 bg-white">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 flex-1">
          <FileText className="h-8 w-8 text-blue-500" />
          <div>
            <p className="font-medium text-gray-900">{fileName}</p>
            <p className="text-sm text-gray-500">PDF Document</p>
          </div>
        </div>
        <Button 
          onClick={onAnalyze} 
          disabled={isAnalyzing}
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {buttonText === 'Upload PDF' ? 'Uploading...' : 'Analyzing...'}
            </>
          ) : (
            buttonText
          )}
        </Button>
      </div>
    </div>
  );
}