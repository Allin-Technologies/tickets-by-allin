import React from "react";

const ctx = React.createContext<unknown>({});
export function GlobalStateProvider({ children }: { children?: React.ReactNode }) {
  const ctxValues = {};
  return <ctx.Provider value={ctxValues}>{children}</ctx.Provider>;
}
