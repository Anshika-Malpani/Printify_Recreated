import React from 'react';

import { MdOutlineArrowOutward } from "react-icons/md";


const Cards = ({ advantage, icon, description }) => {
    
    return (
        <div  style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.35)" }} className=' w-[90%] md:w-[25vw] px-5 py-5  rounded-2xl  text-black transition-all ease-in-out duration-150 hover:scale-105'>
            <div className='w-full h-[15vh] md:h-[25vh]'>
                <div className='w-full h-[8vh] md:h-[12vh] relative'>
                    <div  className='icon-container w-[20vw] md:w-[6.5vw] h-[20vw] md:h-[6.5vw] rounded-full bg-[#D3DEDC] absolute z-10 flex items-center justify-center' >
                        <img src={icon} alt="" className='w-full h-full object-cover ' />
                    </div>

                </div>
                <div className='w-full h-[40%] flex items-center justify-evenly border-b-[1.5px] border-black'>
                    <div className='w-[70%] h-full flex items-center'>
                        <h1 className='text-2xl md:text-xl font-black'>{advantage}</h1>
                    </div>
                    <div className='w-[30%] h-full relative'>
                        <div  className='w-[7vw] md:w-[2.2vw] h-[7vw] md:h-[2.2vw] rounded-full border-[1.5px] border-[#000000] bg-[#fafafa] absolute top-[22%] right-[8%] z-10 flex items-center justify-center'>
                            <div className='w-[100%] h-[100%] font-bold flex items-center justify-center'>{<MdOutlineArrowOutward className="w-[80%] text-black" />}</div>
                        </div>
                        <div className='w-[7vw] md:w-[2.2vw] h-[7vw] md:h-[2.2vw] rounded-full border-[1.5px] border-[#000000] absolute top-[22%] right-[15%]'></div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <p className='text-xs md:text-sm font-semibold opacity-60 text-black text-justify tracking-tight'>{description}</p>
            </div>
        </div>
    )
}

export default Cards