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
      url: 'https://cbub.comicbookuniversebattles.com/static/images/cbub/cbub_contender_image/2/11740/11740.png',
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
