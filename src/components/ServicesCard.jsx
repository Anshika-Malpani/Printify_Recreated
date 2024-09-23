import React, { useEffect } from 'react';
import { gsap } from 'gsap';


const ServicesCard = ({ image, heading, subHeading, description, buttonText }) => {
    useEffect(() => {
        if (window.innerWidth > 1024) {
        gsap.fromTo('.card img', { y: -130 }, {
            y: 0, duration: 1, scrollTrigger: {
                trigger: '.card',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })};
    }, []);
    
    return (
        <div className="card w-full sm:w-[48%] md:w-[30%] lg:w-[26%] flex flex-col gap-2 items-center md:items-start rounded-lg hover:scale-105" >
            <img
                src={image}
                alt="Custom Products"
                className=".card img w-24  mb-4"
            />
            <div className='flex flex-col items-center md:items-start'>
                <h2 className="text-xl font-black text-[#18C75A] ">{heading}</h2>
                <h4 className='text-black font-black text-xl'>{subHeading}</h4>
            </div>
            <p className="text-black text-center md:text-start  text-sm">
                {description}
            </p>
            <div >
                <button className="mt-4 block bg-gradient-to-r from-[#2BC96D] to-[#b1d396] p-4 text-white font-bold py-2 px-4 rounded  hover:bg-green-600 hover:text-white transition-colors">
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default ServicesCard