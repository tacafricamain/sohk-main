import 'react-multi-carousel/lib/styles.css';
import '../styles/globals.css'
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
        {/* twiter */}
        <meta name="twitter:card" content="/aboutushero.png" />
        <meta name="twitter:title" content="welcome to the website of the school of hard knocks nigeria" />
        <meta name="twitter:description" content="the school of hard knocks nigeria" />
        <meta name="twitter:image" content="/aboutushero.png" />
        {/* web icon */}
        <meta property="og:image" content="/aboutushero.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    )
}

export default MyApp
