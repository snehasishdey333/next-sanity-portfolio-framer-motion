"use client"

import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

type Props = {
  professions:string[]
}

const TypeWriter = ({professions}: Props) => {

    const [text]=useTypewriter({
        words:professions,
        loop:true,
        delaySpeed:2000
    })

  return (
    <h1 className='text-3xl md:text-5xl font-extrabold text-center'>{text}</h1>
  )
}

export default TypeWriter