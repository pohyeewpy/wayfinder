'use client';
import { ResourceGalleryItem } from '@/types/resources';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ResourceGallery({ items }: { items: ResourceGalleryItem[] }) {
  if (!items?.length) return null;

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
          preventInteractionOnTransition={true}
          onTouchStart={(swiper, event) => {
            // Prevent parent swiper from swiping when touching this swiper
            event.stopPropagation();
          }}
          style={{
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000',
            '--swiper-navigation-size': '20px',
          } as React.CSSProperties}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                {item.type === 'photo' ? (
                  <img
                    src={item.url}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={item.url}
                    controls
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
