import { Resource } from "@/types/resources";
import ResourceGallery from "@/components/ResourceGallery";

export default function ResourcePage({ 
  resource,
  galleryItems = []
}: { 
  resource: Resource;
  galleryItems?: Array<{ type: "video" | "photo"; url: string }>;
}) {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">{resource.programme_name}</h1>
      <p className="my-4">{resource.short_programme_description}</p>
      
      <div className="my-6 grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Organization</h3>
          <p>{resource.organization_name}</p>
        </div>
        <div>
          <h3 className="font-semibold">Location</h3>
          <p>{resource.location}</p>
        </div>
      </div>

      {/* Gallery section */}
      {galleryItems.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mt-8 mb-4">Gallery</h2>
          <ResourceGallery items={galleryItems} />
        </>
      )}
    </div>
  );
}
