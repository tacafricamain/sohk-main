import Footer from './Footer'
import NavBar from './NavBar'
import Membership from './homepageComponents/Membership'

export default function Layout({children}) {
    return(
        <div>

            <NavBar />
                <div className='pt-12'>
                    { children }
                </div>
            <Membership />
            <Footer />
        </div>
    )
}
