import React from 'react'
import Navbar from '../components/Navbar'
import MainPage from '../components/MainPage'
import AdvatangesPage from '../components/AdvatangesPage'
import ProductRangePage from '../components/productRangePage'
import Services from '../components/Services'
import StoreConnection from '../components/StoreConnection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full '>
      <Navbar />
        <MainPage/>
        <AdvatangesPage/>
        <ProductRangePage/>
        <Services/>
        <StoreConnection/>
        <Footer/>
    </div>
  )
}

export default Home