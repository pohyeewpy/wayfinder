import { ResourceGalleryItem } from "@/types/resources";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ResourceGallery({ items }: { items: ResourceGalleryItem[] }) {
  return (
    <div className="my-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="border rounded-lg"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            {item.type === "photo" ? (
              <img
                src={item.url}
                alt={`Gallery photo ${index + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-gray-100">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Watch Video
                </a>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
