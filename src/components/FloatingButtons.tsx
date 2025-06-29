'use client';

import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
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
        <button 
          className={`${styles.likeBtn} ${isLiked ? styles.liked : ''}`}
          onClick={handleLike}
          aria-label={isLiked ? 'Unlike' : 'Like'}
        >
          {isLiked ? <FaHeart /> : <FaRegHeart />}
        </button>
        <span className={styles.likeCount}>{likeCount}</span>
      </div>
    </div>
  );
};

export default FloatingButtons;
