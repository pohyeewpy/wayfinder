import { Resource } from "./resources";

export enum Tag {
    Anxiety = 'anxiety',
    Burnout = 'burnout',
    Career = 'career',
    Community = 'community',
    Help = 'help',
    Home = 'home'
}

export type Filter = {
    name: string;
    predicate: (r: Resource) => boolean;
}