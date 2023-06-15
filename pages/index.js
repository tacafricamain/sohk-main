import Head from 'next/head'
import React, {useEffect, useState} from 'react'

// components
import Objective from '../components/homepageComponents/Objective'
import HeroSection from '../components/homepageComponents/HeroSection'
import Promotion from '../components/homepageComponents/Promotion'
import Testimonials from '../components/homepageComponents/Testimonials'
import Contact from '../components/homepageComponents/Contact'
import Hero from '../components/homepageComponents/Hero'
import Activities from '../components/homepageComponents/Activities'
import Map from '../components/Map'
import NewsLetter from '../components/newsletter'
import NoticePopup from '../components/noticePopup'
import BottomPopUp from '../components/homepageComponents/bottomPopup'


export default function Home() {




  return (
          <main className='h-full max-w-7xl mx-auto' >
            <Head>
              <title>School of HardKnocks Foundation Nigeria</title>
              <meta name="description" content="school of hard knocks Foundation Nigeria" />
              <meta name="viewport" content="minimum-scale=1, minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
      {/* <HeroSection /> */}
            <Hero />
            <NewsLetter />
            <NoticePopup  />
            <Objective />
            <Activities />
            <Promotion />
            {/* <Courses /> */}
            <Testimonials />
            <Contact />
            <Map />
            <BottomPopUp />
          </main>
  )
}
