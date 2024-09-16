import cn from "@/lib/clsx";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children?: ReactNode;
  id?: string;
  className: string;
}

export function MainWrapper({
  className,
  id,
  children,
}: Readonly<SectionWrapperProps>) {
  return (
    <main
      id={id}
      className={cn("container mx-auto md:max-w-7xl min-h-screen", className)}
    >
      {children}
    </main>
  );
}

export function SectionWrapper({
  className,
  id,
  children,
}: Readonly<SectionWrapperProps>) {
  return (
    <section id={id} className={cn("px-4", className)}>
      {children}
    </section>
  );
}
