import cn from "@/lib/clsx";
import React from "react";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
}

const Loading: React.FC<LoadingProps> = ({ size = "md" }) => {
  // Size mapping
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <div className="flex justify-center items-center py-8 w-full">
      <div
        data-testid="loading-spinner"
        className={cn(
          sizeClasses[size],
          "border-4 border-t-[#0C6DFD] border-r-[#0C6DFD] border-b-[#0C6DFD]/30 border-l-[#0C6DFD]/30 rounded-full animate-spin"
        )}
        role="status"
        aria-label="loading"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
