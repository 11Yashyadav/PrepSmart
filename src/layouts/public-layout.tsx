import { Footer } from "@/components/footer";
import Header from "@/components/header";
import AutheHandler from "@/handlers/auth-handler";
import { Outlet } from "react-router-dom";
export const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* handler to store the user data */}
      <AutheHandler />
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
