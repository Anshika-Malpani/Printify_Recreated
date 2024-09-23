import React from 'react'

const Stores = ({image,alt}) => {
    return (
        <div className="platform-icon w-36 h-36 bg-white rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transform transition-all md:w-48 md:h-48 lg:w-56 lg:h-56">
            <img src={image} alt={alt} className="w-28  lg:w-36" />
        </div>
    )
}

export default Stores