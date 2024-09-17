import cn from "@/lib/clsx";
import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps as NextLinkProps } from "next/link";
import {
  ComponentPropsWithoutRef,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
} from "react";

interface LinkButtonProps
  extends NextLinkProps,
    VariantProps<typeof buttonVariants> {
  variant:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success"
    | "text-primary";
  children: ReactNode;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
}

interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success"
    | "text-primary";
}

const buttonVariants = cva(
  "rounded-xl px-6 py-2 hover:scale-105 transition-all duration-300 text-light hover:text-light",
  {
    variants: {
      variant: {
        "text-primary": "text-primary-blue hover:bg-primary-blue",
        primary: "bg-primary-blue hover:bg-secondary-blue ",
        secondary: "bg-secondary-blue",
        danger: "bg-red-500 hover:bg-red-700",
        warning: "bg-yellow-500 hover:bg-yellow-700",
        success: "bg-green-500 hover:bg-green-700",
      },
    },
  }
);

export function Button({
  children,
  type = "button",
  onClick,
  isDisabled,
  className = "",
  variant = "primary",
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={cn(buttonVariants({ variant }), className)}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className = "",
  variant,
  href,
}: Readonly<LinkButtonProps>) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant }), className)}>
      {children}
    </Link>
  );
}
