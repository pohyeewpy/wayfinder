"use client";
import { CurrentResourceProvider } from "@/components/CurrentResourceProvider";
import SupportGrid from "@/components/SupportGrid";
import Header from "@/components/Header";

export default function Home() {
  return (
    <CurrentResourceProvider>
      <Header />
      <div>
        <div className="text-center m-10">
          <h2 className="text-xl font-semibold text-gray-800">What&apos;s hardest right now?</h2>
          <p className="text-sm text-gray-500 mt-1">Let&apos;s find resources that might help</p>
        </div>
        <SupportGrid />
      </div>
    </CurrentResourceProvider>
  );
}
