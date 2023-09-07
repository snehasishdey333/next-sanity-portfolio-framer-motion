"use client"
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {usePathname} from 'next/navigation'
import Motion from './Motion'
import { Social } from '@/app/types/Social'

type Props = {
  props:Social[]
}

const Navbar = ({props}: Props) => {
  const pathname=usePathname()
  
  return (
    <nav className='sticky top-0 max-w-7xl mx-auto p-5 flex items-center justify-between z-20'>
      <Motion delay={1} direction={'left'}>
      <div className='flex items-center space-x-6'>
        {props?.map((s:Social,index:number)=>(
          <SocialIcon key={index} style={{height:25,width:25}} bgColor='#793FEF' className='hover:scale-125 duration-200' url={s.url} />
        ))}
        </div>
      </Motion>
        
        <Motion delay={1} direction={'right'}>
        <div className='flex items-center space-x-4 md:space-x-8'>
       {pathname!=="/projects" && <Link className='text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base' href="/projects">Projects</Link>}
       {pathname!=="/posts" && <Link className='text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base' href="/posts">Blogs</Link>}
       {pathname!=="/" && <Link className='text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base' href="/">home</Link>}
        </div>

        </Motion>
        
        
    </nav>
  )
}

export default Navbar