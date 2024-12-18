import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

export function SocialLoginButtons() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button variant="outline">
        <Github className="mr-2 h-4 w-4" />
        Github
      </Button>
      <Button variant="outline">
        <Mail className="mr-2 h-4 w-4" />
        Google
      </Button>
    </div>
  );
}