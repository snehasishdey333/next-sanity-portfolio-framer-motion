
import React from 'react'
import Project from './Project'
import Motion from './Motion'
import Link from 'next/link'
import { ProjectType } from '@/app/types/Project'
import { getProjects } from '@/utils/sanity-utis'

type Props = {}

const Projects = async (props: Props) => {

  const projectData:ProjectType[]=await getProjects()
  


  return (
    <section className='h-screen max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24'>
        <h1 className='text-2xl uppercase tracking-[20px] text-violet-500'>projects</h1>
        <Motion delay={1} direction={''}>
        <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-8'>
           {projectData.slice(2,5).map((p:ProjectType,index:number)=>(
            <Project key={index} props={p}/>
           ))}
        </div>
        </Motion>

        <Motion delay={1} direction={''}>
        <div className='grid md:hidden grid-cols-1 md:grid-cols-3 gap-8'>
        {projectData.slice(4,6).map((p:ProjectType,index:number)=>(
            <Project key={index} props={p}/>
           ))}
        </div>
        </Motion>
        <p className='text-center text-xs text-violet-500 cursor-pointer'><Link href="/projects">See more...</Link></p>
    </section>
  )
}

export default Projects