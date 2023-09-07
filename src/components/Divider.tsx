import React from 'react'
import Motion from './Motion'

type Props = {}

const Divider = (props: Props) => {
  return (
    <Motion delay={1.5} direction='left'>
      <div className='w-screen'>
        <div className='bg-violet-500 w-[40%] h-[1px]'>
        </div>
    </div>
    </Motion>
    
  )
}

export default Divider