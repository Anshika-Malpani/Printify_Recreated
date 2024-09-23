import React from 'react'

const Advantages = ({icon,advatange}) => {
  return (
    <>
    <div className='flex items-center justify-center gap-2'>
        {icon}
        <h4 className='opacity-60 font-semibold '>{advatange}</h4>
    </div>
    </>
  )
}

export default Advantages