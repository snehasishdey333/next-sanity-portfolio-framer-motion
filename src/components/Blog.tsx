import React from 'react'
import Motion from './Motion'
import { BlogPost } from '@/app/types/BlogPost'
import Link from 'next/link';

type Props = {
  props:BlogPost
}

const Blog = ({props}: Props) => {
  return (
    <Link href={"/posts/"+props.slug.current} className='flex justify-between items-center w-full'>
        <Motion delay={1} direction={'left'}>
        <p className='text-violet-800 cursor-pointer hover:text-pink-600'>
        {props.title}
        </p>
        </Motion>
        <Motion delay={1} direction={'right'}>
        <p className='text-sm text-violet-500 hidden md:block'>{props.publishedAt.toString().slice(0,10)}</p>
        </Motion>
    </Link>
  )
}

export default Blog