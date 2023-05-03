import 'react-multi-carousel/lib/styles.css';
import '../styles/globals.css'
import '../styles/markdown.css'
import '../styles/style.css'
import { useEffect } from 'react';
import Head from "next/head"

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {

      useEffect(() => { // !hide splash screen
        if (typeof window !== 'undefined') {
                const loader = document.getElementById('globalLoader');
            if (loader)
                loader.style.display = 'none';
        }
    }, []);

  return (
    <>
        <Head>
            <meta property="og:site_name" content="schoolofhardknocks" key="ogsitename" />
            {/* twitter */}
            <meta name="twitter:card" content="https://res.cloudinary.com/tacafrica/image/upload/v1674135945/my_folder/Website%20pics/og_ejtymf.jpg" key="ogimage" />
            <meta name="twitter:title" content="welcome to the website of the school of hard knocks Nigeria" />
            <meta name="twitter:description" content="the school of hard knocks nigeria" />
            <meta name="twitter:image" itemProp="image"  content="https://res.cloudinary.com/tacafrica/image/upload/v1674135945/my_folder/Website%20pics/og_ejtymf.jpg" key="ogimage" />
            {/* web icon */}
            <meta property="og:title" content="welcome to the website of the school of hard knocks Nigeria" />
            <meta property="og:description" content="the school of hard knocks nigeria" />
            <meta property="og:image" itemProp="image" content="https://res.cloudinary.com/tacafrica/image/upload/v1674135945/my_folder/Website%20pics/og_ejtymf.jpg" key="ogimage" />
            <meta property="og:updated_time" content="updatedtime" />
            {/*  */}
            <link itemProp="thumbnailUrl" href="/favicon.ico" /> 
            <meta property="og:image:type" content="image/jpeg" />
            
            <link rel="shortcut icon" href="/favicon.ico" />
            <link src="https://unpkg.com/swiper/swiper-bundle.min.js"></link>
            <link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet" ></link>
        </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    )
}

export default MyApp
