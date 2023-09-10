import { ProjectType } from '@/app/types/Project'
import { Skill } from '@/app/types/Skill'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { getProject, getSocials } from '@/utils/sanity-utis'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  params:{_id:string}
}

const ProjectPage = async({params}: Props) => {

  const _id=params._id
  const socialData=await getSocials()
  const projectData:ProjectType=await getProject(_id)
 


  return (
    <section className='w-full bg-[#F1F6F9]'>
      <Navbar props={socialData}/>
      <div className='min-h-screen flex flex-col max-w-7xl mx-auto my-4 md:my-8 p-5 space-y-4'>
        <h1 className='font-extrabold text-3xl'>{projectData.title}</h1>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2 text-sm text-violet-500'>
            <p>Created at:</p>
            <p className='font-bold'>{projectData._createdAt.toString().slice(0,10)}</p>
          </div>
          <button className='text-[#F1F6F9] md:font-bold bg-violet-500 px-2 md:px-4 py-2 rounded-lg hover:bg-violet-300 text-sm'>
            <Link href={projectData.url}>Link</Link>
          </button>
        </div>
        <Image src={projectData.image} alt="" className="w-full object-cover border-2 border-violet-500" height={500} width={500}/>
        <p>{projectData.description}</p>
        <div className='flex items-center space-x-4 text-violet-500'>
            <h3>Tech used:</h3>
            <div className='flex items-center space-x-2 text-sm font-bold'>
               {projectData.tech.map((t:Skill,index:number)=>(
                <p key={index} className='bg-violet-200 rounded-lg p-1'>{t.title}</p> 
               ))}             
            </div>
        </div>
      </div>
      <Footer props={socialData}/>
    </section>
  )
}

export default ProjectPage