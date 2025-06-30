"use client";
import { useContext, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Virtual } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

import ScrollingTopToolbar from "./ScrollingTopToolbar";
import { CurrentResourceContext } from "./CurrentResourceProvider";
import ResourcePage from "./ResourcePage";
import ResourcePageBottomToolbar from "./ResourcePageBottomToolbar";

export default function PageSwiper() {
  const swiperRef = useRef<SwiperType | null>(null);
  
  const ctx = useContext(CurrentResourceContext);

  const { filtered, currentIndex, prev, next } = ctx || {};

  // Update swiper when currentIndex changes externally (e.g., from toolbar)
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== currentIndex) {
      swiperRef.current.slideTo(currentIndex);
    }
  }, [currentIndex]);
  
  if (!ctx || ctx.filtered.length === 0) return null;

  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.activeIndex;
    if (newIndex < currentIndex) {
      prev();
    } else if (newIndex > currentIndex) {
      next();
    }
  };

  const paginate = (direction: number) => {
    if (!swiperRef.current) return;
    
    if (direction > 0) {
      swiperRef.current.slideNext();
    } else if (direction < 0) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <ScrollingTopToolbar 
        resourceId={currentIndex} 
        numResources={filtered.length} 
        paginate={paginate} 
      />
      
      <div className="w-full h-full pt-14 pb-20">
        <Swiper
          modules={[Navigation, Keyboard, Virtual]}
          spaceBetween={0}
          slidesPerView={1}
          initialSlide={currentIndex}
          virtual={{
            enabled: true,
            addSlidesBefore: 1,
            addSlidesAfter: 1,
          }}
          keyboard={{
            enabled: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          className="w-full h-full"
          style={{
            '--swiper-navigation-color': '#000',
            '--swiper-navigation-size': '24px',
          } as React.CSSProperties}
          speed={300}
          touchRatio={1}
          touchAngle={45}
          threshold={10}
          longSwipes={true}
          longSwipesRatio={0.5}
          longSwipesMs={300}
          followFinger={true}
          allowTouchMove={true}
          resistance={true}
          resistanceRatio={0.85}
        >
          {filtered.map((resource, index) => (
            <SwiperSlide 
              key={resource.id || index} 
              virtualIndex={index}
              className="h-full overflow-auto"
            >
              <div className="w-full h-full">
                <ResourcePage resource={resource} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <ResourcePageBottomToolbar resource={ctx.getCurrentResource()} />
      </div>
    </div>
  );
}