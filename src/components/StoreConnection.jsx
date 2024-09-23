import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Stores from './Stores';

const StoreConnection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
   
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.platform-icon'),
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        duration: 2,
        ease: 'elastic',
        scrollTrigger: { 
          trigger: '.stores', 
          start: 'top 80%', 
          toggleActions: 'play none none reverse', 
        } 
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-gray-100 px-4 md:px-10 stores">
      <h2 className="text-center text-3xl md:text-4xl font-black mb-4">Connect Your Store</h2>
      <p className="text-center mb-12 text-lg text-gray-600">
        Easily integrate with major e-commerce platforms and marketplaces.
      </p>
      <div className="relative flex flex-wrap justify-center gap-5 items-center space-x-0 md:space-x-8">
       <Stores image="big-commerce.svg" alt="big-commerce"/>
       <Stores image="squarespace.svg" alt="squarespace"/>
       <Stores image="wix.svg" alt="wix"/>
       <Stores image="woo.svg" alt="woo"/>
       <Stores image="etsy.svg" alt="etsy"/>
       <Stores image="presta.svg" alt="presta"/>
       <Stores image="shopify.svg" alt="shopify"/>
       <Stores image="more-integration.svg" alt="more-integration"/>
      </div>

      
    </div>
  );
};

export default StoreConnection;
