import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";
import { NavigationRoutes } from "./navigation-routes";

const Header = () => {
  const { userId } = useAuth();
  return (
    <header
      className={cn("w-full border-b duration-150 transition-none ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4 w-full">
          {/*logo section  */}
          <LogoContainer />
          {/*navigation section  */}
          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />
          </nav>
          {/*profile section  */}
        </div>
      </Container>
    </header>
  );
};

export default Header;
