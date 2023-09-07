import Image from 'next/image'
import React from 'react'
import Motion from './Motion'
import { getAbout } from '@/utils/sanity-utis'
import { PortableTextBlock } from 'sanity'
import { PortableText } from '@portabletext/react'

type Props = {
  bio:PortableTextBlock,
  secondImage:string
}

const About = async () => {

  const aboutData:Props=await getAbout()
  

  return (
    <section className='max-w-7xl h-screen mx-auto p-5 flex flex-col items-center justify-center space-y-24 '>
       <h1 className='text-2xl uppercase tracking-[20px] text-violet-500'>about</h1>
       <div className='flex flex-col-reverse md:flex-row items-center md:justify-between w-full '>
            <div className='md:w-[70%] w-full'>
            <Motion delay={1} direction={'left'}>
                <div className='p-4 text-center md:text-left font-semibold text-sm'>
                    <PortableText value={aboutData.bio}/>
                </div>
            </Motion>
            </div>
            

            <div className='w-[200px] md:w-auto'>
            <Motion delay={1} direction={'right'}>
                <div className='flex items-center justify-center shadow-lg shadow-gray-400 rounded-lg bg-white h-[250px] p-2 w-full my-12'>
                    <div className='w-full h-full bg-violet-500 rounded-lg hover:scale-105 duration-300'>
                    <Image src={aboutData.secondImage} alt="img" className="rounded-lg w-full h-full object-cover" height={150} width={150} />
                    </div>
                </div>
            </Motion>
            </div>
       </div>
    </section>
  )
}

export default About