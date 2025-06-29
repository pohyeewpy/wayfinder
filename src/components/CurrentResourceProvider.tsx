"use client";
import { Resource } from "@/types/resources";
import { createContext, ReactNode } from "react";

// When null, it means the user is on the landing page or filters.
export const CurrentResourceContext = createContext<Resource | null>(null);

export function CurrentResourceProvider({ children }: { children: ReactNode }) {
  return (
    <CurrentResourceContext.Provider value={null}>
      {children}
    </CurrentResourceContext.Provider>
  );
}