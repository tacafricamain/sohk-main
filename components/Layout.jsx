import Footer from './Footer'
import NavBar from './NavBar'
import Membership from './homepageComponents/Membership'
import Head from 'next/head'

export default function Layout({children}) {
    return(
        <>
             <Head>
                <meta property="og:image" content="/aboutushero.png" />
            </Head>
            <NavBar />
                { children }
            <Membership />
            <Footer />
        </>
    )
}