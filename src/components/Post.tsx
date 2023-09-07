import { BlogPost } from '@/app/types/BlogPost'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  props:BlogPost
}

const Post = ({props}: Props) => {
  return (
    <Link href={"/posts/"+props.slug.current} className="flex items-center border-2 border-violet-400 hover:scale-105 duration-500 space-x-4 bg-violet-100 rounded-lg shadow-lg shadow-gray-300 p-3">
        <div className='w-[40%]'>
            <Image src={props.mainImage} alt="blogImg" className='w-full object-cover rounded-lg' height={100} width={100}/>
        </div>
        <div className='w-[60%] flex flex-col items-start'>
            <h1 className='font-bold text-xl'>{props.title}</h1>
            <div className='flex items-center space-x-1 text-violet-500 text-sm'>
               <p>Author:</p>
               <p className='font-bold'>{props.author.name}</p>
            </div>
            <div className='w-full flex items-center justify-between space-x-1 text-violet-500'>
               <p className='text-sm'>{props.publishedAt.toString().substring(0,10)}</p>
               <p className='font-bold text-xs'>Click to read more</p>
            </div>
            
        </div>
    </Link>
  )
}

export default Post