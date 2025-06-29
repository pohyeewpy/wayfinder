"use client";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import ScrollingTopToolbar from "./ScrollingTopToolbar";
import { CurrentResourceContext } from "./CurrentResourceProvider";
import ResourcePage from "./ResourcePage";

export default function PageSwiper() {
  const [direction, setDirection] = useState<number | null>(null);

  const ctx = useContext(CurrentResourceContext);
  if (!ctx || ctx.filtered.length === 0) return null;

  const { filtered, currentIndex, next, prev } = ctx;

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      next();
    }
    else if (newDirection < 0) {
      prev();
    }
  };


  return (
    <div className="relative w-full h-full overflow-hidden">
      <ScrollingTopToolbar resourceId={currentIndex} numResources={filtered.length} paginate={paginate} />
      <div className="w-full h-full pt-14 overflow-auto touch-pan-x touch-pan-y">
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full"
          initial={{ x: !direction ? 0 : direction > 0 ? 300 : -300 }}
          animate={{ x: 0 }}
          exit={{ x: !direction ? 0 : direction > 0 ? 300 : -300 }}
          transition={{ type: "spring", stiffness: 50 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) paginate(-1);
            else if (info.offset.x > 100) paginate(1);
          }}
          style={{ top: 0 }}
        >
          <div className="pt-14">
            <ResourcePage resource={ctx.getCurrentResource()} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}