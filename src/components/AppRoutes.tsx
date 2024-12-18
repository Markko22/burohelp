import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { BandoReview } from "@/pages/dashboard/BandoReview";
import { Profile } from "@/pages/dashboard/Profile";
import { Settings } from "@/pages/dashboard/Settings";
import { AuthRoutes } from "@/components/auth/AuthRoutes";
import { useAuth } from "@/providers/AuthProvider";

export function AppRoutes() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/*" element={<AuthRoutes />} />

      {/* Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <Navigate to="/dashboard/bando-review" replace />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/dashboard/bando-review"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <BandoReview />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/dashboard/profile"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/dashboard/settings"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <Settings />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Default Route */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}