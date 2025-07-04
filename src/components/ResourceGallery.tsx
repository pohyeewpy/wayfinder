'use client';
import { ResourceGalleryItem } from '@/types/resources';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ReactPlayer from 'react-player';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

// Define DEFAULT_IMAGE without 'alt' (matches ResourceGalleryItem type)
const DEFAULT_IMAGE: ResourceGalleryItem = {
  type: 'photo',
  url: 'https://images.unsplash.com/vector-1739203267529-6e1852ec52f5?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
};

export default function ResourceGallery({ items }: { items: ResourceGalleryItem[] }) {
  const processedItems = items.length > 0 ? items : [DEFAULT_IMAGE];

  const renderMedia = (item: ResourceGalleryItem) => {
    if (item.type === 'photo') {
      return (
        <Image
          src={item.url}
          alt="Resource image" // Static fallback (required by Next.js)
          className="w-full h-full object-cover"
          width={1200}
          height={675}
          quality={85}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = DEFAULT_IMAGE.url;
          }}
        />
      );
    } else {
      return (
        <div className="relative w-full h-full aspect-video">
          <ReactPlayer
            url={item.url}
            width="100%"
            height="100%"
            controls
            style={{ aspectRatio: '16/9' }}
            config={{
              youtube: {
                playerVars: { 
                  showinfo: 1, 
                  rel: 0,
                  modestbranding: 1,
                },
              }
            }}
          />
        </div>
      );
    }
  };

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        className="rounded-lg"
        grabCursor
        lazy={{
          loadPrevNext: true,
          loadPrevNextAmount: 1,
        }}
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
          '--swiper-navigation-size': '24px',
        } as React.CSSProperties}
      >
        {processedItems.map((item, index) => (
          <SwiperSlide key={index} lazy>
            <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
              {renderMedia(item)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
