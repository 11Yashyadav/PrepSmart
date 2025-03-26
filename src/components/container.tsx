import { cn } from "@/lib/utils";

interface ContaineProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContaineProps) => {
  return (
    <div
      className={cn("container mx-auto px4 md:px-8 py-4 w-full ", className)}
    >
      {children}
    </div>
  );
};
