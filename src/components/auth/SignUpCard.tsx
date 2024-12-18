import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SignUpForm } from "./SignUpForm";

interface SignUpCardProps {
  onRouteChange: (route: "signup" | "login" | "forgot-password") => void;
}

export function SignUpCard({ onRouteChange }: SignUpCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
        <CardDescription className="text-center">
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <button
            onClick={() => onRouteChange("login")}
            className="text-primary underline-offset-4 hover:underline"
          >
            Sign in
          </button>
        </div>
        <div className="text-sm text-muted-foreground">
          <a className="text-primary underline-offset-4 hover:underline" href="#">
            Terms & Conditions
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}