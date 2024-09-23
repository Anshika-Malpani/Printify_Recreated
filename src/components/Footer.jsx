import React from "react";
import FooterSection from "./FooterSection";
import { FaInstagram,FaFacebookF,FaLinkedinIn,FaYoutube } from "react-icons/fa";


const Footer = () => {
    const integrations = ["Shopify", "Etsy", "eBay", "Amazon", "TikTok Shop", "PrestaShop","Printify Pop-Up Store"];
  const discover = ["Blog", "Guides", "Products", "Shipping Rates"];
  const startSelling = ["Custom T-shirts", "Custom Hoodies", "Custom Mugs", "Custom Branding"];
  const printify = ["Print on Demand", "Become a Partner", "About", "Jobs"];
  const socialIcon=["FaInstagram","FaFacebookF","FaLinkedinIn","FaYoutube"]

  return (
    <footer className="bg-gray-100 py-10 px-5 md:px-10 border-[1px]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-wrap md:flex-row justify-evenly gap-5 md:gap-10 border-b pb-8 mb-8">
          <FooterSection title="Integrations" items={integrations} />
          <FooterSection title="Discover" items={discover} />
          <FooterSection title="Start Selling" items={startSelling} />
          <FooterSection title="Printify" items={printify} />
        </div>

        <div className="flex flex-row justify-center gap-5 mb-6">
          {socialIcon.map((icon) => {
            const IconComponent = { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube }[icon]; 
            return (
              <a
                key={icon}
                href="/"
                className="text-gray-600 hover:text-green-600 transition duration-300 ease-in-out"
              >
                <IconComponent /> 
              </a>
            );
          })}
        </div>
        <div className="flex justify-center items-center mb-8">
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="px-4 py-2 w-full rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-500 transition duration-300 ease-in-out">
              Subscribe
            </button>
          </form>
        </div>

      
        <div className="flex justify-center mb-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition duration-300 ease-in-out"
          >
            Back to Top
          </button>
        </div>

        <div className="text-center text-gray-500">
          <p>© 2024 Printify. All rights reserved.</p>
        </div>
      </div>

      
    </footer>
);
};

export default Footer;
