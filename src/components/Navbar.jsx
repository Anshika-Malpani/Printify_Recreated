import React, { useState } from 'react'; 
import Button from './Button';
import { MdOutlineArrowDropDown } from "react-icons/md";
import NavItem from './NavItem';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa"; 
import gsap from 'gsap';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        let t1 = gsap.timeline();
        t1.from('.sidebar', {
            x: -70,
            duration: 0.5,
            ease: 'power2.out'
        })
    };

    return (
        <>
            <header className='navbar w-full h-[11vh] flex items-center justify-between sticky top-0 z-20'>
                <div className=' md:h-full md:w-[20%] flex items-center justify-center'>
                    <img className='hidden md:block md:w-full md:h-[50%] object-contain' src="logo.svg" alt="logo" />
                </div>
                <div className='hidden md:flex w-[60%] h-full items-center justify-center gap-5'> 
                    <NavItem label="Catalog" />
                    <NavItem label="How it works" icon={<IoMdArrowDropdown className='mt-1' />} />
                    <NavItem label="Pricing" />
                    <NavItem label="Blog" />
                    <NavItem label="Services" icon={<IoMdArrowDropdown className='mt-1' />} />
                    <NavItem label="Use-Cases" icon={<IoMdArrowDropdown className='mt-1' />} />
                    <NavItem label="Need help?" icon={<IoMdArrowDropdown className='mt-1' />} />
                </div>

                <div className='md:hidden absolute left-4 flex gap-2'>
                    <button onClick={toggleMenu}>
                        <FaBars className='text-[7vw] text-green-500' />
                    </button>
                    <div className=' h-full w-[40%] flex items-center justify-center'>
                        <img className='w-full h-[50%] object-contain' src="logoIcon.svg" alt="logo" />
                    </div>
                </div>

                <div className={`absolute sidebar w-[70%] h-screen  top-0 left-0 bg-white  ${isOpen ? 'flex flex-col gap-5' : 'hidden'} md:hidden`}> 

                    <div className=" p-4 border-[1px] flex items-center" >
                        <h1 className="text-4xl text-center font-bold ml-3">Menu</h1>
                            <button className='flex justify-end w-full' onClick={toggleMenu} >
                                <FaTimes className='text-[7vw] text-black ' />
                            </button>
                        </div>

                    <div className='flex-col flex items-start px-8  gap-5 mt-[10vw]'>
                        <NavItem label="Catalog" />
                        <NavItem label="How it works" icon={<IoMdArrowDropdown className='mt-1' />} />
                        <NavItem label="Pricing" />
                        <NavItem label="Blog" />
                        <NavItem label="Services" icon={<IoMdArrowDropdown className='mt-1' />} />
                        <NavItem label="Use-Cases" icon={<IoMdArrowDropdown className='mt-1' />} />
                        <NavItem label="Need help?" icon={<IoMdArrowDropdown className='mt-1' />} />
                    </div>
                </div>
                <div className='w-[50%] md:w-[20%] h-full flex items-center justify-center gap-4'>
                    <Button name='Log in' theme='light' />
                    <Button name='Sign Up' theme='dark'  />
                </div>
            </header>
        </>
    )
}

export default Navbar;