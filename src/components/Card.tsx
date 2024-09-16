import cn from "@/lib/clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function SmallCard({ children, className = "" }: Readonly<CardProps>) {
  return (
    <article
      className={cn(
        "rounded-xl sm:rounded-2xl shadow-lg bg-light w-full sm:w-[400px] h-[200px] flex justify-center items-center",
        className
      )}
    >
      {children}
    </article>
  );
}

export function LargeCard({ children, className = "" }: Readonly<CardProps>) {
  return (
    <article
      className={cn(
        "rounded-xl sm:rounded-2xl shadow-lg bg-light w-full sm:w-[400px] h-[200px] flex justify-center items-center",
        className
      )}
    >
      {children}
    </article>
  );
}
