import { Tag } from "./filters";

export type ResourceGalleryItem = {
  type: "video" | "photo";
  url: string;
};

export type Resource = {
  id: number;
  programme_name: string;
  organization_name: string;
  short_programme_description: string;
  targeted_age_range: string;
  modality: string;
  location: string;
  cost: string;
  tags: Tag[];
  confidential: boolean;
  anonymous: boolean;
  opening_hours: string;
  get_started_website?: string;
  org_website?: string;
  gallery?: ResourceGalleryItem[];
};
