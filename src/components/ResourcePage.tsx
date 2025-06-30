import { Resource } from "@/types/resources";
import KeyMetricsSection from "./KeyMetricsSection";
import CommentsSection from "./CommentsSection";
import FeaturedCommentSection from "./FeaturedCommentSection";
import OpeningHoursAddressSection from "./OpeningHoursAddressSection";

const featuredComment = {
  id: 1,
  avatar: "https://cbub.comicbookuniversebattles.com/static/images/cbub/cbub_contender_image/2/11740/11740.png",
  name: "anya",
  date: "2025-06-03",
  comment: "I really had fun at this programme! For anyone hesitating, you never know until you try it out.",
  likes: 14,
};

export default function ResourcePage({ resource }: { resource: Resource | null }) {
  if (!resource) {
    return <div className="text-center text-gray-500">Something went wrong - try reselecting your filters!</div>;
  }
  return (
    <div className="w-full h-full px-8 flex flex-col items-center space-y-8">
      <h1>{resource.programme_name}</h1>
      <p>{resource.short_programme_description}</p>
      <KeyMetricsSection resource={resource} />
      <FeaturedCommentSection comment={featuredComment} />
      <OpeningHoursAddressSection resource={resource} />
      <CommentsSection />
    </div>
  );
}
