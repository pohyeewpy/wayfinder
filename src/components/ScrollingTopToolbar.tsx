import { ChevronLeft, ChevronRight } from "lucide-react";

type ScrollingTopToolbarProps = {
  page: number;
  pages: React.ReactNode[];
  paginate: (direction: number) => void;
};

export default function ScrollingTopToolbar({ page, pages, paginate }: ScrollingTopToolbarProps) {
    return (
        <div
            className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 bg-orange-300 z-20 select-none"
            style={{ touchAction: "none", userSelect: "none" }}
        >
        <button
          onClick={() => paginate(-1)}
          disabled={page === 0}
          className={`p-2 rounded-full transition-colors ${
            page === 0 ? "text-gray-300" : "text-gray-700 hover:bg-gray-200"
          }`}
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => paginate(1)}
          disabled={page === pages.length - 1}
          className={`p-2 rounded-full transition-colors ${
            page === pages.length - 1
              ? "text-gray-300"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
}