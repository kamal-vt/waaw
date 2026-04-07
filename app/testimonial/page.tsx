'use client'
import { Navbar } from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import OurClient from '@/components/sections/OurClient';
import { Metadata } from 'next';
import React from 'react'



export const metadata: Metadata = {
  title: "Testimonials",
  description: "Hear from our satisfied clients about their experience working with Waaw and the impact of our software solutions.",
  keywords: "testimonials, client reviews, software development testimonials, web design testimonials, digital solutions testimonials, custom software testimonials, technology services testimonials, business automation testimonials",
};

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