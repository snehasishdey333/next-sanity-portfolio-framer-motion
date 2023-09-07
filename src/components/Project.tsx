import { ProjectType } from '@/app/types/Project'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  props:ProjectType
}

const Project = ({props}: Props) => {
  return (
    <Link href={"/projects/"+props._id} className="relative h-[200px] rounded-lg group cursor-pointer shadow-lg shadow-gray-400 hover:scale-105 duration-300">
        <Image src={props.image} alt="" className="h-full w-full rounded-lg" height={150} width={200}/> 
        <div className='bg-violet-500 absolute top-0 left-0 h-full w-full flex justify-center items-center text-white p-5 text-xs text-center rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in duration-300'>
           {props.description}
        </div>
    </Link>
  )
}

export default Project