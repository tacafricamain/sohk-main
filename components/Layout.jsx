import Footer from './Footer'
import NavBar from './NavBar'
import Membership from './homepageComponents/Membership'
import Head from 'next/head'


export default function Layout({children}) {
    return(
        <>
             <Head>
        {/* twiter */}
                <meta name="twitter:card" content="/aboutushero.png" />
                <meta name="twitter:title" content="welcome to the website of the school of hard knocks Nigeria" />
                <meta name="twitter:description" content="the school of hard knocks nigeria" />
                <meta name="twitter:image" content="/aboutushero.png" />
                {/* web icon */}
                <meta property="og:title" content="welcome to the website of the school of hard knocks Nigeria" />
                <meta property="og:description" content="the school of hard knocks nigeria" />
                <meta property="og:image" content="/aboutushero.png" />
                
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <NavBar />
                { children }
            <Membership />
            <Footer />
        </>
    )
}