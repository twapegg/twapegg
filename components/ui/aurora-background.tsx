"use client";
import { cn } from "@/utils/cn";
import React from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const auroraVars = {
    "--white-gradient":
      "repeating-linear-gradient(100deg,var(--white) 0%,var(--white) 7%,transparent 10%,transparent 12%,var(--white) 16%)",
    "--dark-gradient":
      "repeating-linear-gradient(100deg,var(--black) 0%,var(--black) 7%,transparent 10%,transparent 12%,var(--black) 16%)",
    "--aurora":
      "repeating-linear-gradient(100deg,var(--yellow-900) 10%,var(--yellow-900) 15%,var(--orange-900) 20%,var(--yellow-900) 25%,var(--yellow-900) 30%)",
  } as React.CSSProperties;

  return (
    <main className="h-full w-full">
      <div
        className={cn(
          "relative flex h-full w-full flex-col items-center justify-center bg-black text-slate-950 transition-bg",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            style={{
              ...auroraVars,
              backgroundImage: "var(--dark-gradient), var(--aurora)",
              backgroundSize: "100%, 200%",
              backgroundPosition: "50% 50%, 50% 50%",
              maskImage: showRadialGradient
                ? "radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%)"
                : "none",
            }}
            className={cn(
              `
            filter blur-sm invert
            pointer-events-none
            absolute -inset-2.5 opacity-50 will-change-transform`,
            )}
          >
            <div
              style={{
                ...auroraVars,
                backgroundImage: "var(--dark-gradient), var(--aurora)",
                backgroundSize: "300%, 100%",
              }}
              className="absolute inset-0 animate-aurora motion-reduce:animate-none mix-blend-difference"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
