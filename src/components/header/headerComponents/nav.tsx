import { Link } from "react-router-dom"

export default function Sitenav () {
    return (
        <nav className='hidden md:flex md:justify-end'>
            <ul className='text-2xl inline-flex content-between'>
                <Link to='/' >
                    <li className='text-white hover:text-sky-400 hover:animate-bounce transition duration-300 font-bold m-1.5 pr-5 underline'>Home</li>
                </Link>
                <Link to='/Blog-pages' >
                    <li className='text-white hover:text-sky-400 hover:animate-bounce transition duration-300 font-bold m-1.5 pr-5 underline'>Blog</li>
                </Link>
                <Link to='/Application-pages' >
                    <li className='text-white hover:text-sky-400 hover:animate-bounce transition duration-300 font-bold m-1.5 pr-5 underline'>Applications</li>
                </Link>
            </ul>
        </nav>
    )
}