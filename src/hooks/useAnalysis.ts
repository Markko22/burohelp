import { useState } from "react";
import { analyzePDFWithChatGPT } from "@/lib/api/openai";
import { convertPDFToBase64 } from "@/lib/utils/pdf";
import { useToast } from "@/hooks/use-toast";

interface AnalysisResults {
  oggetto: string;
  descrizione: string;
  requisiti: string;
  modalita: string;
  allegati: string;
  ulteriori: string;
}

export function useAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const { toast } = useToast();

  const parseChatGPTResponse = (response: string): AnalysisResults => {
    const sections = response.split(/\d\)/).filter(Boolean);
    return {
      oggetto: sections[0]?.trim() || "",
      descrizione: sections[1]?.trim() || "",
      requisiti: sections[2]?.trim() || "",
      modalita: sections[3]?.trim() || "",
      allegati: sections[4]?.trim() || "",
      ulteriori: sections[5]?.trim() || "",
    };
  };

  const analyzeFile = async (file: File) => {
    setIsAnalyzing(true);
    try {
      const base64Content = await convertPDFToBase64(file);
      const response = await analyzePDFWithChatGPT(base64Content);
      const parsedResults = parseChatGPTResponse(response);
      setResults(parsedResults);
      
      toast({
        title: "Analysis Complete",
        description: "The PDF has been successfully analyzed.",
      });
    } catch (error) {
      console.error("Error during analysis:", error);
      toast({
        title: "Analysis Failed",
        description: "Failed to analyze the PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return {
    isAnalyzing,
    results,
    analyzeFile,
  };
}