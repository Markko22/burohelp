import { useState } from 'react';
import { auth, SignUpData, LoginData } from '@/lib/auth';
import { useToast } from '@/components/ui/use-toast';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleError = (error: Error) => {
    toast({
      title: 'Error',
      description: error.message,
      variant: 'destructive',
    });
  };

  const signUp = async (data: SignUpData) => {
    try {
      setIsLoading(true);
      await auth.signUp(data);
      toast({
        title: 'Success',
        description: 'Please check your email to verify your account.',
      });
    } catch (error) {
      handleError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (data: LoginData) => {
    try {
      setIsLoading(true);
      await auth.login(data);
      toast({
        title: 'Success',
        description: 'You have been logged in.',
      });
    } catch (error) {
      handleError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true);
      await auth.resetPassword(email);
      toast({
        title: 'Success',
        description: 'Please check your email for the reset link.',
      });
    } catch (error) {
      handleError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    signUp,
    login,
    resetPassword,
  };
}