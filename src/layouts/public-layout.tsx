import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";
export const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* handler to store the user data */}
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
