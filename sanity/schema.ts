import { type SchemaTypeDefinition } from 'sanity'
import skill from './schemas/skill'
import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import profile from './schemas/profile'
import project from './schemas/project'
import social from './schemas/social'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skill,blockContent,category,post,profile,project,social],
}
