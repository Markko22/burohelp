import { useState } from "react";
import { Card } from "@/components/ui/card";
import { PDFUploadZone } from "@/components/pdf/PDFUploadZone";
import { PDFPreview } from "@/components/pdf/PDFPreview";
import { AnalysisResult } from "@/components/bando/AnalysisResult";
import { useAnalysis } from "@/hooks/useAnalysis";

export function BandoReview() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { isAnalyzing, results, analyzeFile } = useAnalysis();

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;
    await analyzeFile(selectedFile);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Bando Review</h2>
      </div>

      <Card className="p-6">
        {selectedFile ? (
          <PDFPreview
            fileName={selectedFile.name}
            onAnalyze={handleAnalyze}
            isAnalyzing={isAnalyzing}
            buttonText="Analyze Content"
          />
        ) : (
          <PDFUploadZone onFileSelect={handleFileSelect} />
        )}
      </Card>

      {results && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Analysis Results</h3>
          <AnalysisResult results={results} />
        </div>
      )}
    </div>
  );
}