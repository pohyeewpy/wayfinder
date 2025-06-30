'use client';

import { Heart } from 'lucide-react';
import { useState } from 'react';

export default function FloatingButton({
  getStartedUrl
}: {
  getStartedUrl?: string;
}) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 flex gap-3">
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100"
        aria-label={isLiked ? "Unlike this resource" : "Like this resource"}
      >
        <Heart 
          size={24}
          fill={isLiked ? "#ec4899" : "none"}
          className={isLiked ? "text-pink-500" : "text-gray-500"}
        />
      </button>

      {getStartedUrl && (
        <a
          href={getStartedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 flex items-center"
        >
          Get Started
        </a>
      )}
    </div>
  );
}
