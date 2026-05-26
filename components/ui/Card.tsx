import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-[2rem] border border-tealDeep/10 bg-white/90 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
