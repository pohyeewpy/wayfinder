"use client";
import { useContext } from "react";
import { CurrentResourceContext } from "./CurrentResourceProvider";

interface SupportOptionProps {
  emoji: string;
  label: string;
  tag: string;
  color: string;
}

export default function SupportOption({ emoji, label, tag, color }: SupportOptionProps) {
  const ctx = useContext(CurrentResourceContext);
  const filter = ctx?.filter;

  const handleOptionClick = (tag: string) => {
    filter?.((resource) => resource.tags.includes(tag));
    console.log("set to", tag);
  };

  return (
    <div
      onClick={() => handleOptionClick(tag)}
      className="bg-white border rounded-xl shadow-sm p-4 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer"
    >
      <div className={`w-14 h-14 flex items-center justify-center rounded-full text-3xl ${color}`}>{emoji}</div>
      <p className="mt-2 font-medium text-center">{label}</p>
    </div>
  );
}