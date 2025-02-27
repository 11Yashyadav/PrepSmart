import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";

const Header = () => {
  const { userId } = useAuth();
  return (
    <header
      className={cn("w-full border-b duration-150 transition-none ease-in-out")}
    >
      <Container>
        <div >
          {/*logo section  */}

          {/*navigation section  */}

          {/*profile section  */}
        </div>
      </Container>
    </header>
  );
};

export default Header;
