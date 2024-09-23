import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { IoMdArrowForward } from "react-icons/io";


const images = ["shirt.png", "case.png", "mug.png", "cap.png"];
const ProductRangePage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentImageIndex + 1) % images.length;
            gsap.to(imageRef.current, { x: '-100%', duration: 0.5, onComplete: () => {
                setCurrentImageIndex(nextIndex);
                gsap.set(imageRef.current, { x: '100%' });
                gsap.to(imageRef.current, { x: '0%', duration: 0.5 });
            }});
        }, 2000); 
    
        return () => clearInterval(interval);
    }, [currentImageIndex]); 
    
    useEffect(() => {
        if (window.innerWidth > 1024) {
            gsap.fromTo('.animated-div', 
                { x: '-100%', opacity: 0 }, 
                { 
                    x: '0%', 
                    opacity: 1, 
                    duration: 1, 
                    scrollTrigger: {
                        trigger: '.animated-div',
                        start: 'top 80%', 
                        once: true 
                    }
                }
            );
        }
    }, []);

    return (
        <div className='w-full h-screen relative '>
            <div className='w-[85%] h-[35vh] md:w-[30vw] md:h-[80%] bg-[#18C75A] rounded-t-3xl md:rounded-xl mx-auto absolute left-[7%] top-10 md:top-0 md:left-[10%] flex items-center justify-center overflow-hidden z-10'>
            <div className='w-full h-full flex items-center justify-center overflow-hidden'>
                <img ref={imageRef} className='w-full h-[80%] md:w-[90%] md:h-full object-contain' src={images[currentImageIndex]} alt="" />
            </div>
            </div>
            <div className='animated-div absolute w-[85%] md:w-[50vw] h-[40vh] md:h-[55vh] bg-[#F7F7F7] left-[7%] md:left-[39%] bottom-[20%] md:bottom-[20%] rounded-b-3xl md:rounded-r-xl py-[1rem] md:py-[2rem] pl-[2rem] md:pl-[9rem] pr-[2rem] md:pr-[7.5rem] flex justify-center flex-col gap-4'>
                <h1 className='text-3xl md:text-3xl font-black'>Easily add your design to a wide range of products</h1>
                <h4 className='text-gray-500 text-sm md:text-base'>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</h4>
                <h4 className='text-[#39B75D] font-black flex items-center text-xl gap-1'>All products<IoMdArrowForward className='text-xl md:text-2xl mt-[0.2rem]'/></h4>
            </div>
        </div>
    )
}

export default ProductRangePage