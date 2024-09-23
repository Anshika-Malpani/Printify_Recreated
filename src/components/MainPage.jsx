import React, { useRef } from 'react'
import { IoMdCheckmark } from "react-icons/io";
import Advantages from './Advantages';
import Button from './Button';
import { MdOutlinePlayCircle } from "react-icons/md";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const MainPage = () => {
    const print1 = useRef();
    const print2 = useRef();
    const print3 = useRef();
    const print4 = useRef();

    useGSAP(() => {
        const getWidth = () => {
            
            return window.innerWidth < 768 ? "30%" : "25%"; 
        };
        
        const animatePrint = (printRef, targetLeft, targetTop, targetWidth, originalLeft, originalTop) => {
            gsap.to(printRef.current, {
                left: targetLeft,
                top: targetTop,
                width: targetWidth,
                onComplete: () => {
                    setTimeout(() => {
                        gsap.to(printRef.current, {
                            left: originalLeft,
                            top: originalTop,
                            width: getWidth(),
                        });
                    }, 1000);
                }
            });
        };
    
        const animations = [
            { ref: print1, target: ["42%", "23%", "15%"], original: ["0%", "12%"] }, 
            { ref: print2, target: ["42%", "25%", "15%"], original: ["3%", "70%"] }, 
            { ref: print3, target: ["42%", "25%", "15%"], original: ["70%", "56%"] }, 
            { ref: print4, target: ["42%", "23%", "15%"], original: ["72%", "6%"] }, 
        ];
    
        animations.forEach((anim, index) => {
            setTimeout(() => {
                animatePrint(anim.ref, ...anim.target, ...anim.original);
            }, index * 2000); 
        });
    
        setTimeout(() => {
            gsap.to([print1.current, print2.current, print3.current, print4.current], {
                scale: 1.1,
                duration: 0.5,
                yoyo: true,
                repeat: Infinity,
            });
        }, 8000);
    });
    return (
        <div className='w-full '>
            <div className='w-full h-[95vh] flex flex-col md:flex-row items-center md:justify-evenly px-10'>
                <div className='w-full h-[40%] md:w-[50%] md:h-full flex flex-col md:pl-[7vw] mt-6 justify-center gap-8'>
                    <div><h1 className='text-4xl md:text-6xl font-black'>Create and sell custom products</h1></div>
                    <div className='flex flex-col items-start justify-start'>
                        <Advantages icon={<IoMdCheckmark className='text-[#39B75D]  text-[3vw] md:text-[1.6vw]' />} advatange='100% Free to use' />
                        <Advantages icon={<IoMdCheckmark className='text-[#39B75D]  text-[3vw] md:text-[1.6vw]' />} advatange='900+ High-Quality Products' />
                        <Advantages icon={<IoMdCheckmark className='text-[#39B75D]  text-[3vw] md:text-[1.6vw]' />} advatange='Largest global print network' />
                    </div>
                    <div className='flex gap-2 flex-col'>
                        <div className='flex gap-5'>
                            <Button name="Start for free" theme='dark' paddingy='py-6' width='w-[40%] md:w-[13vw]' />
                            <Button name="How it works?" theme='light' paddingy='py-6' icon={<MdOutlinePlayCircle />} width='w-[40%] md:w-[13vw]' />
                        </div>
                        <h5 className='ml-[0.2rem] text-[#39B75D] font-semibold text-[3vw] md:text-[1.3vw]'>Trusted by over 8M sellers around the world</h5>
                    </div>
                </div>
                <div className='w-full h-[60%] md:w-[50%] md:h-full flex items-center relative'>
                    <img className='w-full h-full object-contain' src="model.png" alt="" />
                    <img ref={print1} className='print1 absolute w-[30%] md:w-[22%] left-[0%] md:left-[3.5rem] top-[12%] md:top-[9rem]' src="print1.png" alt="" />
                    <img ref={print2} className='print2 absolute w-[30%] md:w-[23%] left-[3%] md:left-[2.5rem] top-[70%] md:top-[25rem]' src="print2.png" alt="" />
                    <img ref={print3} className='print3 absolute w-[30%] md:w-[22%] left-[72%] md:left-[26.5rem] top-[56%] md:top-[22rem]' src="print3.png" alt="" />
                    <img ref={print4} className='print4 absolute w-[30%] md:w-[22%] left-[70%] md:left-[26.5rem] top-[6%] md:top-[5rem]' src="print6.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainPage