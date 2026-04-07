'use client'
import { Navbar } from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import OurClient from '@/components/sections/OurClient';
import React from 'react'

const OurClientPage = () => {
  return (
    <div>
      <Navbar/>
        <OurClient/>
      <FooterSection/>
    </div>
  )
}

export default OurClientPage;   