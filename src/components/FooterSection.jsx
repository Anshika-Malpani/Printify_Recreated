import React from "react";

const FooterSection = ({ title, items }) => {
  return (
    <div>
      <h4 className="font-bold text-lg text-gray-800 mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <a href="/" className="hover:text-green-600 hover:underline transition duration-300 ease-in-out">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
