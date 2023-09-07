import { PortableTextBlock, Slug } from "sanity";
import { Profile } from "./Profile";
import { Category } from "./Category";

export type BlogPost={
    _id:string,
    title:string,
    author:Profile,
    slug:Slug,
    mainImage:string,
    body:PortableTextBlock,
    publishedAt:string,
    categories:Category[],
}