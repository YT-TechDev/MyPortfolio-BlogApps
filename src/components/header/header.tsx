import { motion } from "motion/react";
import Menu from "./headerComponents/Menu";
import Nav from "./headerComponents/nav";

export default function header(props:any) {
    const { onClick,isActive } = props;

    return (
        <>
        <motion.header initial={{ opacity:0 }} animate={{ opacity:1, transition:{duration:1,  }}} className='z-10 bg-linear-to-r from-purple-300 via-purple-600 to-purple-900 w-full p-4 sticky top-0'>
            <div className="flex justify-between mx-auto container items-center ">
                <div className="inline-flex">
                    <h1 className="flex items-center text-4xl justify-center">My-site</h1>
                </div>
                <Nav />
                <Menu onClick={onClick} isActive={isActive} />
            </div>
        </motion.header>
        </>
    )
}