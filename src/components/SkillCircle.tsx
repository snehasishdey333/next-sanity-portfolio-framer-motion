import { Skill } from '@/app/types/Skill'
import Image from 'next/image'
import React from 'react'

type Props = {
  props:Skill
}

const SkillCircle = ({props}: Props) => {
  return (
    <div className='h-24 w-24 flex justify-center items-center p-1 rounded-full shadow-lg shadow-gray-400 bg-violet-500 hover:bg-pink-500 duration-300 hover:scale-110'>
       <div className='flex justify-center items-center bg-[#F1F6F9] rounded-full h-full w-full'>
            <Image src={props.image} alt="skill" className="" height={50} width={50}/>
       </div>
    </div>
  )
}

export default SkillCircle