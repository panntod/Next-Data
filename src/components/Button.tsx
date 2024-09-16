import cn from "@/lib/clsx";
import Link, { LinkProps as NextLinkProps } from "next/link";
import {
  ComponentPropsWithoutRef,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
} from "react";

interface LinkButtonProps extends NextLinkProps {
  variant: "primary" | "secondary" | "danger" | "warning" | "success" | "text-primary";
  children: ReactNode;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
} 

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "danger" | "warning" | "success" | "text-primary";
}

const variants = {
  "text-primary":
    "px-6 py-2 text-primary-blue rounded-xl hover:bg-primary-blue hover:scale-105 transition-all duration-300 hover:text-light",
  primary:
    "px-6 py-2 bg-primary-blue rounded-xl hover:bg-secondary-blue hover:scale-105 transition-all duration-300 text-light",
  secondary:
    "px-6 py-2 bg-secondary-blue rounded-xl hover:scale-105 transition-all duration-300 text-light",
  danger:
    "px-6 py-2 bg-red-500 rounded-xl hover:bg-red-700 hover:scale-105 transition-all duration-300 text-light",
  warning:
    "px-6 py-2 bg-yellow-500 rounded-xl hover:bg-yellow-700 hover:scale-105 transition-all duration-300 text-light",
  success:
    "px-6 py-2 bg-green-500 rounded-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 text-light",
};

function getVariantClass(variant: keyof typeof variants): string {
  return variants[variant];
}

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
      className={cn(getVariantClass(variant), className)}
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
    <Link
      href={href}
      className={cn(getVariantClass(variant), className)}
    >
      {children}
    </Link>
  );
}
