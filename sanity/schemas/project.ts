import { defineField,defineType } from "sanity";

export default defineType({
    name:'project',
    title:'Project',
    type:'document',
    fields:[
        defineField({
            name:'title',
            title:'Title',
            type:'string',
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'string',
        }),
      
        defineField({
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot:true
            }
        }),
        
        defineField({
            name:'url',
            title:'URL',
            type:'string',
            
        }),
        defineField({
            name:'tech',
            title:'Tech',
            type:'array',
            of:[{type:'reference',to:{type:'skill'}}]
            
        })
    ]
})