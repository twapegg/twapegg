"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

const STORAGE_KEY = "lightweight-mode";
const LIGHTWEIGHT_MODE_EVENT = "lightweight-mode-change";

interface LightweightModeContextValue {
  isLightweightMode: boolean;
  toggleLightweightMode: () => void;
}

const LightweightModeContext = createContext<
  LightweightModeContextValue | undefined
>(undefined);

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  };

  const handleLocalChange = () => {
    onStoreChange();
  };

  window.addEventListener("storage", handleStorageChange);
  window.addEventListener(LIGHTWEIGHT_MODE_EVENT, handleLocalChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
    window.removeEventListener(LIGHTWEIGHT_MODE_EVENT, handleLocalChange);
  };
}

function getServerSnapshot() {
  return false;
}

function getSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(STORAGE_KEY) === "true";
}

export function LightweightModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLightweightMode = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const toggleLightweightMode = useCallback(() => {
    const next = !getSnapshot();
    window.localStorage.setItem(STORAGE_KEY, String(next));
    window.dispatchEvent(new Event(LIGHTWEIGHT_MODE_EVENT));
  }, []);

  const value = useMemo(
    () => ({ isLightweightMode, toggleLightweightMode }),
    [isLightweightMode, toggleLightweightMode]
  );

  return (
    <LightweightModeContext.Provider value={value}>
      {children}
    </LightweightModeContext.Provider>
  );
}

export function useLightweightMode() {
  const context = useContext(LightweightModeContext);
  if (!context) {
    throw new Error(
      "useLightweightMode must be used within a LightweightModeProvider"
    );
  }
  return context;
}
