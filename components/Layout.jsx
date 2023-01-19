import Footer from './Footer'
import NavBar from './NavBar'
import Membership from './homepageComponents/Membership'
import Head from 'next/head'
import og from '../public/og.jpg'


export default function Layout({children}) {
    return(
        <>
 
            <NavBar />
                { children }
            <Membership />
            <Footer />
        </>
    )
}