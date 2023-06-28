import Head from 'next/head'
import React, {useEffect, useState} from 'react'

// components
import Objective from '../components/homepageComponents/Objective'
import Promotion from '../components/homepageComponents/Promotion'
import Testimonials from '../components/homepageComponents/Testimonials'
import Contact from '../components/homepageComponents/Contact'
import Hero from '../components/homepageComponents/Hero'
import Activities from '../components/homepageComponents/Activities'
import Map from '../components/Map'
import NewsLetter from '../components/newsletter'


export default function Home() {

  return (
          <main className='h-full max-w-7xl mx-auto font-SpaceGrotesk' >
            <Head>
              <title>School of HardKnocks Foundation Nigeria</title>
              <meta name="description" content="school of hard knocks Foundation Nigeria" />
              <meta name="viewport" content="minimum-scale=1, minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <NewsLetter />
            <Objective />
            <Activities />
            <Promotion />
            <Testimonials />
            <Contact />
            <Map />
          </main>
  )
}
