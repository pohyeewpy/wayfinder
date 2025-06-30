'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import styles from './FloatingButtons.module.css';

const FloatingButtons = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.getStartedBtn}>Get Started</button>
      
      <div className={styles.likeContainer}>
      <Heart
            className={`h-5 w-5 text-pink-400 cursor-pointer`}
            fill={isLiked ? "currentColor" : "none"}
            onClick={() => handleLike()}
        />
        <span className={styles.likeCount}>{likeCount}</span>
      </div>
    </div>
  );
};

export default FloatingButtons;
