import { Resource } from "@/types/resources";
import KeyMetricsSection from "./KeyMetricsSection";
import CommentsSection from "./CommentsSection";

export default function ResourcePage({ resource }: { resource: Resource | null }) {
  if (!resource) {
    return <div className="text-center text-gray-500">Something went wrong - try reselecting your filters!</div>;
  }
  return (
    <div className="w-full h-full py-4 px-8 flex flex-col items-center">
      <h1>{resource.programme_name}</h1>
      <p>{resource.short_programme_description}</p>
      <KeyMetricsSection resource={resource} />
      <CommentsSection />
    </div>
  );
}
