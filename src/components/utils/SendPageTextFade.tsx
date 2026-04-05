
import { motion } from 'motion/react'
import { type ReactNode } from 'react'

export default function SendPageTextFade({ children }:{ children:ReactNode }) {
    const AnimationPropertys:any = {
        inital:{
            opacity:0
        },
        animate:{
            opacity:1,
            transition:{
                duration:1,
            },
        },
    }
    
    

  return (
    <>
        <motion.main initial="inital" animate="animate" className='m-0 p-0 bg-black' variants={AnimationPropertys}>
            {children}
        </motion.main>
    </>
  )
}
