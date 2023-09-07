import Footer from '@/components/Footer'
import Motion from '@/components/Motion'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
import { getProjects, getSocials } from '@/utils/sanity-utis'
import React from 'react'
import { ProjectType } from '../types/Project'

type Props = {}

const ProjectsPage = async (props: Props) => {
  const socialData=await getSocials()
  const projectData:ProjectType[]=await getProjects()
  return (
    <section className='w-full bg-[#F1F6F9]'>
        <Navbar props={socialData}/>
        <div className='max-w-7xl min-h-screen mx-auto p-5'>
        <Motion delay={1} direction={''}>
            <div className='w-full p-5 my-4 md:my-16 grid grid-cols-1 md:grid-cols-3 gap-12'>
            {projectData.map((p:ProjectType,index:number)=>(
            <Project key={index} props={p}/>
           ))}
            </div>
        </Motion>
        </div>
        <Footer/>
    </section>
  )
}

export default ProjectsPage