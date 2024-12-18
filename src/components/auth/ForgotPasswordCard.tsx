import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ForgotPasswordForm } from "./ForgotPasswordForm";

interface ForgotPasswordCardProps {
  onRouteChange: (route: "signup" | "login" | "forgot-password") => void;
}

export function ForgotPasswordCard({ onRouteChange }: ForgotPasswordCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Reset Password</CardTitle>
        <CardDescription className="text-center">
          Enter your email address and we'll send you a link to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ForgotPasswordForm />
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="text-sm text-muted-foreground">
          Remember your password?{" "}
          <button
            onClick={() => onRouteChange("login")}
            className="text-primary underline-offset-4 hover:underline"
          >
            Sign in
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}