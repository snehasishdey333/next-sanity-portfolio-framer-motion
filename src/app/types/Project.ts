import { Skill } from "./Skill"

export type ProjectType={
    _id:string,
    title:string,
    description:string,
    image:string,
    _createdAt:string,
    url:string,
    tech:Skill[]
}