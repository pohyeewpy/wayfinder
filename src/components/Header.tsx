"use client";
import { useContext } from "react";
import { CurrentResourceContext } from "@/components/CurrentResourceProvider";

export default function Header() {
  const ctx = useContext(CurrentResourceContext);
  const reset = ctx?.reset;

  const handleResetClick = () => {
    reset?.();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center p-4 border-b">
      <div onClick={handleResetClick} className="flex justify-center items-center gap-3 cursor-pointer">
        <div className="w-14 h-14 flex items-center justify-center rounded-full text-2xl bg-blue-100 text-white font-bold">
          W
        </div>
        <h1 className="text-xl font-bold text-gray-700">Wayfinder</h1>
      </div>
      <div className="flex gap-4">
        <div
        onClick={handleResetClick} className="bg-blue-100 p-2 rounded-full cursor-pointer">
          <img
            src="/icons/house-solid.svg"
            alt=""
            className="w-6 h-6"
            style={{ filter: "invert(100%) brightness(200%)" }}
          />
        </div>
        <div className="bg-blue-100 p-2 rounded-full cursor-pointer">
          <img
            src="/icons/magnifying-glass-solid.svg"
            alt=""
            className="w-6 h-6"
            style={{ filter: "invert(100%) brightness(200%)" }}
          />
        </div>
      </div>
    </header>
  );
}
