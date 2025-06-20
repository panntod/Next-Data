"use client";

import cn from "@/lib/clsx";
import { PropsWithChildren } from "react";
import { ButtonProps } from "../types/Button.types";
import { buttonVariants } from "../utils";

export function Button({
  type = "button",
  onClick,
  text,
  isDisabled = false,
  className = "",
  variant = "primary",
  size = "medium",
  fullWidth = false,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
      style={{ width: fullWidth ? "100%" : "auto" }}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {text || children}
    </button>
  );
}
