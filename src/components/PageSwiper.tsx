"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ScrollingTopToolbar from "./ScrollingTopToolbar";

// Dummy pages for testing
function Page1() {
  return (
    <div className="flex items-center justify-center h-full bg-orange-100">
      <h2 className="text-2xl font-bold">Page 1</h2>
    </div>
  );
}

function Page2() {
  return (
    <div className="flex items-center justify-center h-full bg-pink-100">
      <h2 className="text-2xl font-bold">Page 2</h2>
    </div>
  );
}

function Page3() {
  return (
    <div className="flex items-center justify-center h-full bg-green-100">
      <h2 className="text-2xl font-bold">Page 3</h2>
    </div>
  );
}

const pages = [
  <Page1 key="page1" />,
  <Page2 key="page2" />,
  <Page3 key="page3" />
];

export default function PageSwiper() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<number | null>(null);

  const paginate = (newDirection: number) => {
    setPage((prev) => {
      const next = prev + newDirection;
      if (next < 0 || next >= pages.length) return prev;
      setDirection(newDirection);
      return next;
    });
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <ScrollingTopToolbar page={page} pages={pages} paginate={paginate} />
      <div className="w-full h-full pt-14 overflow-auto touch-pan-x touch-pan-y">
      <motion.div
        key={page}
        className="absolute w-full h-full"
        initial={{ x: !direction ? 0 : direction > 0 ? 300 : -300 }}
        animate={{ x: 0 }}
        exit={{ x: !direction ? 0 : direction > 0 ? 300 : -300 }}
        transition={{ type: "spring", stiffness: 50 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, info) => {
          if (info.offset.x < -100) paginate(1);
          else if (info.offset.x > 100) paginate(-1);
        }}
        style={{ top: 0 }}
      >
        {pages[page]}
      </motion.div>
      </div>
    </div>
  );
}