import Head from 'next/head'

// components
import Story from '../components/homepageComponents/Story'
import HeroSection from '../components/homepageComponents/HeroSection'
import Promotion from '../components/homepageComponents/Promotion'
import Courses from '../components/Courses'
import Testimonials from '../components/homepageComponents/Testimonials'
import Contact from '../components/homepageComponents/Contact'
import Membership from '../components/homepageComponents/Membership'
import Activities from '../components/homepageComponents/Activities'

export default function Home() {



  return (
          <main className='' >
            <Head>
              <title>School of HardKnocks</title>
              <meta name="description" content="school of hard knocks nigeria" />
              <meta name="viewport" content="minimum-scale=1, minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroSection />
            <Story />
            <Activities />
            <Promotion />
            <Courses />
            <Testimonials />
            <Contact />
            <Membership />
          </main>
  )
}
