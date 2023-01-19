import Footer from './Footer'
import NavBar from './NavBar'
import Membership from './homepageComponents/Membership'
import Head from 'next/head'
import og from '../public/og.jpg'


export default function Layout({children}) {
    return(
        <>
            <Head>
                <meta property="og:site_name" content="schoolofhardknocks" key="ogsitename" />
                {/* twitter */}
                <meta name="twitter:card" content="/og.jpg" key="ogimage" />
                <meta name="twitter:title" content="welcome to the website of the school of hard knocks Nigeria" />
                <meta name="twitter:description" content="the school of hard knocks nigeria" />
                <meta name="twitter:image" itemProp="image"  content="/og.jpg" key="ogimage" />
                {/* web icon */}
                <meta property="og:title" content="welcome to the website of the school of hard knocks Nigeria" />
                <meta property="og:description" content="the school of hard knocks nigeria" />
                <meta property="og:image" itemProp="image" content="/og.jpg" key="ogimage" />
                <meta property="og:updated_time" content="updatedtime" />
                {/*  */}
                <link itemProp="thumbnailUrl" href="/favicon.ico" /> 
                <meta property="og:image:type" content="image/jpeg" />
                
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <NavBar />
                { children }
            <Membership />
            <Footer />
        </>
    )
}