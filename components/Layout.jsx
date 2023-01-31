import Footer from './Footer'
import NavBar from './NavBar'
import Membership from './homepageComponents/Membership'
import Head from 'next/head'
import og from '../public/og.jpg'


export default function Layout({children}) {
    return(
        <>
 
            <NavBar />
                <div className='pt-12'>
                    { children }
                </div>
            <Membership />
            <Footer />
        </>
    )
}