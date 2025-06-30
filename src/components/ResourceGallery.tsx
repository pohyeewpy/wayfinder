'use client';
import { ResourceGalleryItem } from '@/types/resources';

export default function ResourceGallery({ items }: { items: ResourceGalleryItem[] }) {
  if (!items?.length) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            {item.type === 'photo' ? (
              <img
                src={item.url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
                loading="lazy"
              />
            ) : (
              <video
                src={item.url}
                controls
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
