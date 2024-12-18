import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "@/components/AppRoutes";
import { AuthProvider } from "@/providers/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}