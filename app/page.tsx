import Clients from '@/components/home/Clients'
import Footer from '@/components/home/Footer'
import GallerySection from '@/components/home/GallerySection'
import Hero from '@/components/home/Hero'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <Hero/>
      <GallerySection/>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default page