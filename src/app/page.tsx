"use client";
import { CurrentResourceProvider } from "@/components/CurrentResourceProvider";
import SupportGrid from "@/components/SupportGrid";

export default function Home() {
  return (
    <CurrentResourceProvider>
      <div>
        <h1>How are you feeling today?</h1>
        <SupportGrid />
      </div>
    </CurrentResourceProvider>
  );
}
