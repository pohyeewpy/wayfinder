'use client';
import { ResourceGalleryItem } from '@/types/resources';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function ResourceGallery({ items }: { items: ResourceGalleryItem[] }) {
    const processedItems = items.length > 0 ? items : [
    {
      type: 'photo',
      url: 'https://images.unsplash.com/vector-1739203267529-6e1852ec52f5?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
  ];

  const renderMedia = (item: ResourceGalleryItem) => {
    if (item.type === 'photo') {
      return (
        <Image
          src={item.url}
          alt="Gallery image"
          className="w-full h-full object-contain"
          loading="lazy"
          width={1000}
          height={1000}
        />
      );
    } else {
      const playerProps: ReactPlayerProps = {
        url: item.url,
        width: '100%',
        height: '100%',
        controls: true,
        style: { aspectRatio: '16/9' },
        config: {
          youtube: {
            playerVars: { showinfo: 1, rel: 0 }
          }
        }
      };

      return (
        <div className="w-full h-full">
          <ReactPlayer {...playerProps} />
        </div>
      );
    }
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          className="rounded-lg"
          nested={true}
          grabCursor={true}
          touchMoveStopPropagation={processedItems.length > 1}
          onTouchStart={processedItems.length > 1 ? (swiper, event) => {
            event.stopPropagation();
          } : undefined}
          style={{
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000',
            '--swiper-navigation-size': '20px',
          } as React.CSSProperties}
        >
          {processedItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                {renderMedia(item)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
