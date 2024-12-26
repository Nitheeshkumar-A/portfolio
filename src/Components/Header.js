import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (

        <header className="flex  justify-between px-5 py-4 bg-primary drop-shadow-lg text-white">
            <a className="font-bold text-lg" href="#">NITHEESH KUMAR A</a>
<nav className="hidden md:block">

<ul className="flex text-lg ">
                <li className=' hover:text-black'><a href="/" >Home</a></li>
                <li className=' hover:text-black'><a href="#About" >About</a></li>
                <li className=' hover:text-black'><a href="#Project" >Project</a></li>
                <li className=' hover:text-black'><a href="#Resume" >Resume</a></li>
                <li className=' hover:text-black'><a href="#Contact" >Contact</a></li>
            </ul>
</nav>

{toggleMenu && <nav className="block md:hidden  ">

<ul onClick={()=> setToggleMenu(!toggleMenu)}   className="flex flex-col text-white mobile-nav">
                <li><a href="#" >Home</a></li>
                <li><a href="#About" >About</a></li>
                <li><a href="#Project" >Project</a></li>
                <li><a href="#Resume" >Resume</a></li>
                <li><a href="#Contact" >Contact</a></li>
            </ul>
</nav>}

<button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className="text-white h-5"/> </button>
        </header>
    )
}