import React from 'react';

const NavItem = ({ label, icon }) => (
    <div className="flex items-center justify-center text-center md:justify-start md:text-left">
        <h6 className='font-medium text-[5vw] md:text-[1rem]'> 
            {label}
        </h6>
        {icon}
    </div>
);

export default NavItem;