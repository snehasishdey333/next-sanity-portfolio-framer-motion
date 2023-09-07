import { defineField,defineType } from 'sanity';

export default defineType({
    name:'skill',
    title:'Skill',
    type:'document',
    fields:[
        defineField({
            name:'title',
            title:'Title',
            type:'string'
        }),
        defineField({
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot:true
            }
        })
    ]

})
