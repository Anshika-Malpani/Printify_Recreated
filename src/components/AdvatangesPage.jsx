import React from 'react'

import Cards from './Cards'

const AdvatangesPage = () => {

  return (

    <div className='w-full h-full md:h-[75vh] my-10 md:mt-0 flex flex-col md:flex-row items-center justify-evenly gap-4 '>

        <Cards advantage="Higher Profits"  icon="higher-profits.svg" description="We offer some of the lowest prices in the industry because print providers continuously compete to win your business."/>

        <Cards advantage="Robust Scaling"  icon="robust-scaling.svg" description="Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."/>

        <Cards advantage="Best Selection"  icon="best-selection.svg" description="With 900+ products and top quality brands, you can choose the best products for your business."/>

    </div>

  )

}

export default AdvatangesPage