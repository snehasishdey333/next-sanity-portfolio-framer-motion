import React from 'react'
import SkillCircle from './SkillCircle'
import Motion from './Motion'
import { getSkills } from '@/utils/sanity-utis'
import { Skill } from '@/app/types/Skill'

type Props = {}

const Skills = async (props: Props) => {

  const skillData:Skill[]=await getSkills()



  return (
    <section className="h-screen p-5 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24">
        <h1 className='text-2xl uppercase tracking-[20px] text-violet-500'>skills</h1>
        <Motion delay={1} direction={''}>
        <div className='grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8'>
           {skillData.map((s:Skill,index:number)=>(
            <SkillCircle key={index} props={s}/>
           ))}
        </div>

        </Motion>
        
    </section>
  )
}

export default Skills