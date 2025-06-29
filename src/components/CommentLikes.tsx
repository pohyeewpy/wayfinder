"use client";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function CommentLikes({ likes }: { likes: number }) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div>
        <Heart
            className={`h-5 w-5 text-pink-400 cursor-pointer`}
            fill={isLiked ? "currentColor" : "none"}
            onClick={() => setIsLiked(!isLiked)}
        />
        <span className={"ml-1 text-sm text-pink-400"}>
            {isLiked ? likes + 1 : likes}
        </span>
        </div>
    );
}