import Head from 'next/head'
import React, {useEffect, useState} from 'react'

// components
import Story from '../components/homepageComponents/Story'
import HeroSection from '../components/homepageComponents/HeroSection'
import Promotion from '../components/homepageComponents/Promotion'
import Courses from '../components/Courses'
import Testimonials from '../components/homepageComponents/Testimonials'
import Contact from '../components/homepageComponents/Contact'
import Membership from '../components/homepageComponents/Membership'
import Activities from '../components/homepageComponents/Activities'
import Map from '../components/Map'
import NoticePopup from '../components/noticePopup'




export default function Home() {
  
  const [showModal, setShowModal] = useState(false)
  
  const callPopup = () => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 5000)
    return () => clearTimeout(timer)
  }

  useEffect(() => {
    callPopup()
  }, [])



  return (
          <main className='h-full' >
            <Head>
              <title>School of HardKnocks nigeria</title>
              <meta name="description" content="school of hard knocks nigeria" />
              <meta name="viewport" content="minimum-scale=1, minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroSection />
            {
              showModal &&
            <NoticePopup showModal={showModal} setShowModal={setShowModal}/>
            }
            <Story />
            <Activities />
            <Promotion />
            <Courses />
            <Testimonials />
            <Contact />
            <Map />
            {/* <Membership /> */}
          </main>
  )
}
