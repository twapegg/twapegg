"use client";

import StarBackground from "@/components/ui/star-background";
import {
  LightweightModeProvider,
  useLightweightMode,
} from "@/components/ui/lightweight-mode";
import LightweightToggle from "@/components/ui/lightweight-toggle";

function LightweightShellContent({ children }: { children: React.ReactNode }) {
  const { isLightweightMode } = useLightweightMode();

  return (
    <>
      {!isLightweightMode ? <StarBackground /> : null}
      <LightweightToggle />
      {children}
    </>
  );
}

export default function LightweightShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LightweightModeProvider>
      <LightweightShellContent>{children}</LightweightShellContent>
    </LightweightModeProvider>
  );
}
