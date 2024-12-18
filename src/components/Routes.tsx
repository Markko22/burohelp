import { useState } from "react";
import { SignUpCard } from "./auth/SignUpCard";
import { LoginCard } from "./auth/LoginCard";
import { ForgotPasswordCard } from "./auth/ForgotPasswordCard";

type Route = "signup" | "login" | "forgot-password";

export function Routes() {
  const [route, setRoute] = useState<Route>("signup");

  const handleRouteChange = (newRoute: Route) => {
    setRoute(newRoute);
  };

  return (
    <>
      {route === "signup" && <SignUpCard onRouteChange={handleRouteChange} />}
      {route === "login" && <LoginCard onRouteChange={handleRouteChange} />}
      {route === "forgot-password" && <ForgotPasswordCard onRouteChange={handleRouteChange} />}
    </>
  );
}