import { motion } from "motion/react"
import { Link } from "react-router-dom"


export default function MenuComponents(props:any) {
    return ( 
        <>
            <button onClick={props.onClick} type="button" className="z-10 space-y-2 md:hidden lg:hidden">
                <div className={ props.isActive ? 'w-8 h-0.5 bg-black translate-y-2.5 rotate-45' : 'w-8 h-0.5 bg-black'} />
                <div className={ props.isActive ? 'opacity-0' : 'w-8 h-0.5 bg-black'} />
                <div className={ props.isActive ? 'w-8 h-0.5 bg-black  -rotate-45' : 'w-8 h-0.5 bg-black'} />
            </button>
{/*min-h-screen bg-linear-to-r from-emerald-700 via-green-500 to-lime-700 bg-size-[400%,400%] animate-gradient */}
            <nav className={ props.isActive ? 'flex flex-col justify-start font-bold pt-8 px-3 fixed right-0 top-0 w-8/12 h-screen z-9 bg-linear-to-r from-purple-100 via-lime-100 bg-red-100 bg-size-[400%,400%] animate-gradient ease-in' : 'fixed hidden' }>
                <ul className="mt-10 pt-10 md:mt-20 md:pt-20">
                    <Link to='/'>
                        <motion.div initial={{scale:0}} whileInView={{scale:1, transition:{duration:0.2,delay:0}}} whileTap={{scale:0.1, transition:{duration:0.1}}} className="flex justify-center items-center mt-5 w-full h-20 bg-purple-500/20 rounded-xl">
                            <li className="text-center  text-black font-black">Home</li>
                        </motion.div>
                    </Link>
                    <Link to='/Blog-pages'>
                        <motion.div initial={{scale:0}} whileInView={{scale:1, transition:{duration:0.2,delay:0.1}}} whileTap={{scale:0.1, transition:{duration:0.1}}} className="flex justify-center items-center mt-5 w-full h-20 bg-green-500/20 rounded-xl">
                            <li className="text-center  text-black font-black">Blog</li>
                        </motion.div>
                    </Link>
                    <Link to='/Application-pages'>
                        <motion.div initial={{ scale:0 }} whileInView={{ scale:1 , transition: { duration:0.2,delay:0.2 }}} whileTap={{scale:0.1, transition:{duration:0.1}}} className="flex justify-center items-center mt-5 w-full h-20 bg-black/20 rounded-xl">
                            <li className="text-center  text-black font-black">Applications</li>
                        </motion.div>
                    </Link>
                </ul>
            </nav>
        </>
    )
}