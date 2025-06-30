'use client';
import { Resource } from '@/types/resources';
import ResourceGallery from '@/components/ResourceGallery';
import FloatingButton from '@/components/FloatingButtons';

export default function ResourcePage({ resource }: { resource: Resource }) {
  return (
    <div className="p-4 max-w-4xl mx-auto pb-20"> {/* Extra padding for floating button */}
      {/* Media Gallery - Only shows if items exist */}
      {resource.gallery?.length > 0 && (
        <ResourceGallery items={resource.gallery} />
      )}

      {/* Floating Button (positioned via FloatingButton component) */}
      <FloatingButton 
        getStartedUrl={resource.get_started_website} 
        resourceId={resource.id} 
      />
    </div>
  );
}
