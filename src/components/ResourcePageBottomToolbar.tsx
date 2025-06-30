'use client';

import { Heart } from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Resource } from '@/types/resources';
import CommentLikes from './CommentLikes';

export default function ResourcePageBottomToolbar({
  resource
}: {
  resource: Resource | null;
}) {
  const [isLiked, setIsLiked] = useState(false);

  if (!resource) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 flex space-x-4 justify-between items-center px-4 py-3 bg-white/80 backdrop-blur-sm border-t shadow-lg w-full z-50">
      <div className="flex-1">
        {resource.get_started_website && (
          <Button
            className="w-full bg-blue-300"
            size="lg"
            asChild
          >
            <a
              href={resource.get_started_website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started!
            </a>
          </Button>
        )}
      </div>
      <CommentLikes likes={16} />
    </div>
  );
}
