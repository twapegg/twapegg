"use client";

import { LuRocket, LuSparkles } from "react-icons/lu";
import { useLightweightMode } from "./lightweight-mode";

export default function LightweightToggle() {
  const { isLightweightMode, toggleLightweightMode } = useLightweightMode();

  return (
    <button
      type="button"
      onClick={toggleLightweightMode}
      aria-pressed={isLightweightMode}
      aria-label="Toggle lightweight mode"
      className="fixed right-4 top-4 z-[100] group rounded-full border border-white/30 bg-black/50 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-[#7fc7ba] hover:bg-black/70 md:right-8 md:top-6"
    >
      <span className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white md:text-sm">
        {isLightweightMode ? (
          <LuRocket className="text-[#7fc7ba]" aria-hidden />
        ) : (
          <LuSparkles className="text-[#f3d36a]" aria-hidden />
        )}
        {isLightweightMode ? "Lightweight" : "Full Effects"}
      </span>
    </button>
  );
}
