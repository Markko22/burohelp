import { LogOut, Settings, User, FileText, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-800">Burohelp</h1>
        </div>
        <p className="text-sm text-gray-500 mt-1">Administrative Assistant</p>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 pt-4">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 mb-2"
          onClick={() => navigate("/dashboard/bando-review")}
        >
          <FileText className="h-5 w-5" />
          Bando Review
        </Button>
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2"
          onClick={() => navigate("/dashboard/profile")}
        >
          <User className="h-5 w-5" />
          Profile
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-2"
          onClick={() => navigate("/dashboard/settings")}
        >
          <Settings className="h-5 w-5" />
          Settings
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
}