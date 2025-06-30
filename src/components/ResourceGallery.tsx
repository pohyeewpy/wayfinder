'use client';
import { ResourceGalleryItem } from '@/types/resources';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function ResourceGallery({ items }: { items: ResourceGalleryItem[] }) {
  const filteredItems = items.filter(item => item.type === 'photo'); // Only show photos for now
  
  if (!filteredItems?.length) {
    filteredItems.push({
      type: 'photo',
      url: 'https://images.unsplash.com/vector-1739203267529-6e1852ec52f5?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    });
  }

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
          {filteredItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                  <Image
                    src={item.url}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    width={1000}
                    height={1000}
                  />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
