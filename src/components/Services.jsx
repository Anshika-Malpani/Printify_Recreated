import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServicesCard from './ServicesCard';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);



  return (
    <div ref={sectionRef} className="container mx-auto -mt-20 md:py-10 px-4 md:px-10 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-evenly">
        <ServicesCard image ='custom-products.webp' heading='CREATE' subHeading='custom products' description='Easily add your designs to a wide range of products using our free tools.' buttonText=' Learn More'/>
        <ServicesCard image ='your-products.webp' heading='SELL' subHeading='on your terms' description='You choose the products, set the price, and decide where to sell.' buttonText=' Get Started'/>
        <ServicesCard image ='fullfillment.webp' heading='WE HANDLE' subHeading='custom products' description=' We handle all printing and delivery logistics once an order is placed.' buttonText='See More'/>
      </div>
    </div>
  );
};

export default Services;
