import { useState } from 'react';
import { uploadPDF } from '@/lib/api/pdf';
import { analyzePDF } from '@/lib/api/analyze';
import { useToast } from '@/hooks/use-toast';

export function usePDFUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const uploadData = await uploadPDF(file);
      
      if (!uploadData?.path) {
        throw new Error('Upload failed');
      }

      toast({
        title: 'Success',
        description: 'PDF uploaded successfully.',
      });
      
      return uploadData;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to upload the PDF';
      console.error('Error uploading PDF:', error);
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const handleAnalyze = async (filePath: string) => {
    setIsAnalyzing(true);
    try {
      // Send the file path directly to the analyze function
      await analyzePDF(filePath);

      toast({
        title: 'Analysis Started',
        description: 'Your PDF is being analyzed. Results will be available soon.',
      });

      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to analyze the PDF';
      console.error('Error analyzing PDF:', error);
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
      return false;
    } finally {
      setIsAnalyzing(false);
    }
  };

  return {
    isUploading,
    isAnalyzing,
    handleUpload,
    handleAnalyze,
  };
}