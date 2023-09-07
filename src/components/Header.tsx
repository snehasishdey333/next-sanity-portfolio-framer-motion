import Image from 'next/image'
import React from 'react'
import TypeWriter from './TypeWriter'
import CursorComponent from './CursorComponent'
import { SocialIcon } from 'react-social-icons'
import Motion from './Motion'
import { getProfile } from '@/utils/sanity-utis'
import { Profile } from '@/app/types/Profile'
import { Social } from '@/app/types/Social'

type Props = {}

const Header = async (props: Props) => {
  
  const profileData:Profile=await getProfile()
 


  return (
    <section className='relative z-0 h-[calc(100vh-56px)] w-full flex justify-center items-center'>
       <div className='flex flex-col items-center justify-center space-y-4 '>
        <Motion delay={1} direction='down'>
        <div className='bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-md shadow-gray-400 hover:scale-105 duration-500'>
            <Image src={profileData.image} alt="img" className="" height={150} width={150}/>
          </div>
        </Motion>
          
          <Motion delay={1} direction=''>
          <p className='font-bold'>{profileData.smallBio}</p>
          </Motion>
          
          <Motion delay={1} direction=''>
          <div className='flex justify-center space-x-2 items-center'>
          <TypeWriter professions={profileData.profession} />
          <CursorComponent/>
          </div>
          </Motion>

          <Motion delay={1} direction=''>
          <div className='flex items-center space-x-6'>
      
        {profileData.socials.map((s:Social,index:number)=>(
          <SocialIcon key={index} style={{height:25,width:25}} bgColor='#793FEF' className='hover:scale-125 duration-200' url={s.url} />
        ))}
        </div>
        </Motion>
          
       </div>
       <div className='h-[30%] -z-10 absolute w-[50%] md:w-[20%] opacity-50 fliter blur-3xl bg-gradient-to-r from-fuchsia-500 to-indigo-600'/>
    </section>
  )
}

export default Header