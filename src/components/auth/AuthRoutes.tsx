import { Routes, Route, Navigate } from "react-router-dom";
import { SignUpCard } from "./SignUpCard";
import { LoginCard } from "./LoginCard";
import { ForgotPasswordCard } from "./ForgotPasswordCard";
import { useAuth } from "@/providers/AuthProvider";

export function AuthRoutes() {
  const { isAuthenticated } = useAuth();

  const AuthLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center p-4">
      {children}
    </div>
  );

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <Routes>
      <Route
        path="/signup"
        element={
          <AuthLayout>
            <SignUpCard onRouteChange={() => {}} />
          </AuthLayout>
        }
      />
      <Route
        path="/login"
        element={
          <AuthLayout>
            <LoginCard onRouteChange={() => {}} />
          </AuthLayout>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <AuthLayout>
            <ForgotPasswordCard onRouteChange={() => {}} />
          </AuthLayout>
        }
      />
    </Routes>
  );
}