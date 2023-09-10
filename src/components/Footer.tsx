import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Motion from './Motion'
import { Social } from '@/app/types/Social'

type Props = {
  props:Social[]
}

const Footer = ({props}: Props) => {
  return (
    <footer className='bg-violet-900 w-full py-5'>
       <div className='max-w-7xl mx-auto flex justify-between items-center p-5'>
       <Motion delay={1} direction={'left'}>
       {props?.map((s:Social,index:number)=>(
          <SocialIcon key={index} style={{height:25,width:25}} bgColor='#793FEF' className='hover:scale-125 duration-200' url={s.url} />
        ))}
       </Motion>
       
       <Motion delay={1} direction={'right'}>
        <p className='text-[#F1F6F9] text-xs md:text-sm'>Made with ❤️ by FullStackSnehasish</p>
        </Motion>
       </div>
    </footer>
  )
}

export default Footer