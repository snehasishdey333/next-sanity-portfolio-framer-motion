import Footer from '@/components/Footer'
import Motion from '@/components/Motion'
import Navbar from '@/components/Navbar'
import Post from '@/components/Post'
import { getBlogPosts, getSocials } from '@/utils/sanity-utis'
import React from 'react'
import { BlogPost } from '../types/BlogPost'

type Props = {}

const PostsPage = async(props: Props) => {

  const socialData=await getSocials()
  const blogData:BlogPost[]=await getBlogPosts()

  return (
    <section className='w-full bg-[#F1F6F9]'>
      <Navbar props={socialData}/>
      <div className='max-w-7xl min-h-screen mx-auto p-5'>
      <Motion delay={1} direction={''}>
            <div className='w-full p-5 my-4 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-12'>
            {blogData.map((b:BlogPost,index:number)=>(
              <Post key={index} props={b}/>
            ))}
            </div>
      </Motion>
        </div>
      <Footer/>
    </section>
  )
}

export default PostsPage