import Footer from './Footer'
import NavBar from './NavBar'
import Membership from './homepageComponents/Membership'

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