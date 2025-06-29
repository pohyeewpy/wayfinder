"use client";
import { motion } from "framer-motion";
import { useState } from "react";

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

  const paginate = (newDirection: number) => {
    setPage((prev) => {
      const next = prev + newDirection;
      if (next < 0 || next >= pages.length) return prev;
      return next;
    });
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        key={page}
        className="absolute w-full h-full"
        initial={page === 0 ? false : { x: 300 }} // No animation on first render
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: "spring", stiffness: 50 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, info) => {
          if (info.offset.x < -100) paginate(1);
          else if (info.offset.x > 100) paginate(-1);
        }}
      >
        {pages[page]}
      </motion.div>
    </div>
  );
}