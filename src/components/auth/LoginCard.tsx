import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "./LoginForm";

interface LoginCardProps {
  onRouteChange: (route: "signup" | "login" | "forgot-password") => void;
}

export function LoginCard({ onRouteChange }: LoginCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-sm text-muted-foreground text-center">
          Don't have an account?{" "}
          <button
            onClick={() => onRouteChange("signup")}
            className="text-primary underline-offset-4 hover:underline"
          >
            Sign up
          </button>
        </div>
        <div className="text-sm text-muted-foreground text-center">
          <button
            onClick={() => onRouteChange("forgot-password")}
            className="text-primary underline-offset-4 hover:underline"
          >
            Forgot your password?
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}