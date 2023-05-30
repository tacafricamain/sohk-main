/* eslint-disable react/jsx-key */
import {useState, useCallback} from 'react';
import Link from 'next/link';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaWhatsapp
} from 'react-icons/fa';

export default function Footer() {
    const [menuState, setMenuState] = useState(false);

    const toggleButton = useCallback(() => {
        setMenuState((menuState) => !menuState);
    }, []);

    const data = [
        'Home',
        'About Us',
        'Services',
        'Events',
        'Discover More',
        'Become A Member',
    ];

    return (
        <div className="bg-fixed bg-center bg-cover bg-footerBG"
            style={
                {backgroundAttachment: 'scroll'}
        }>
            <div className="pt-12 flex flex-col justify-between pb-12 text-white md:h-[60vh]"
                style={
                    {background: 'rgba(0, 0, 0, 0.69)'}
            }>
                <div className="container mx-auto sm:px-4 max-w-full ">
                    <div className="container mt-md-5">
                        <div className="flex flex-wrap ">
                            <div className="md:w-1/3 pr-4 pl-4">
                                <div className="flex">
                                    <div className="max-w-xs">
                                        <div>
                                            <h3 className="font-bold text-xl text-white">ABOUT US</h3>
                                            <p className="">
                                                SOHK is a mind reorientation school based on
                                                                        recreational events, talent discovery and sports
                                                                        curiculum activities that transforms the Psyche, Mind
                                                                        and well being of individuals exposed and afflicted by
                                                                        trauma, drug abuse, and depression.
                                            </p>
                                        </div>

                                        <div className="pt-4 ">
                                            <Link href="/aboutus/#aboutus">
                                                <a className="text-darkBlue ease-in duration-200 hover:text-white"
                                                    style={
                                                        {
                                                            fontSize: '15px',
                                                            textDecoration: 'underline'
                                                        }
                                                }>
                                                    READ MORE
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/3 pr-4 pl-4">
                                <div className="">
                                    <div className="">
                                        <h3 className="font-bold text-xl text-white uppercase">
                                            Quicklinks
                                        </h3>
                                        <ul className='space-y-4'>
                                            {
                                            data.map((item, i) => (
                                                <li>{item}</li>
                                            ))
                                        } </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/3 pr-4 pl-4">
                                <div className="flex flex-wrap ">
                                    <div className=" xl:w-full pr-4 pl-4 space-y-4">
                                        <h3 className="w-full mt-0 mb-0 pt-0 pb-2 pl-0 pr-0 font-bold text-xl text-white uppercase">
                                            get in touch
                                        </h3>
                                        <div className="">
                                            <p className="text-sm mb-1 text-white"></p>
                                            <hr className="w-4/5"/>
                                        </div>

                                        <div className="">
                                            <p className="text-sm mb-1 text-white">
                                                TAC Community Hub: No.1 Sleekseed Crescent, Chikakore
                                                                        District, Kubwa, Abuja
                                            </p>
                                            <hr className="w-4/5"/>
                                        </div>

                                        <div className="">
                                            <p className="text-sm space-x-4 mb-1 text-white">
                                                phone:
                                                <a href='tel:+2349088559001 '>+2349088559001</a>
                                                <a href='tel:+2349088559002'>+2349088559002</a>
                                            </p>
                                            <hr className="w-4/5"/>
                                        </div>

                                        <div className="">
                                            <p className="text-sm mb-1 text-white">
                                                <a className='text-white' href="mailto:contactus@schoolofhardknocks.com.ng" target="_blank" rel="noreferrer">
                                                    email: contactus@schoolofhardknocks.com.ng</a>
                                            </p>
                                            <hr className="w-4/5"/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center my-6 ">
                    <Link className='mx-2' href="https://wa.me/+2349088559003">
                        <a target="_blank" rel="noreferrer">
                            <FaWhatsapp className="mx-6 fa fa-brands fa-whatsapp fa-2x  text-darkBlue ease-in duration-200 hover:text-white"/> {/* <img className='w-5 mx-2' src="/whatsapp.png" title="whatsapp icons" alt='whatsapp'/> */} </a>
                    </Link>
                    {/* facebook */}
                    <Link href={'https://web.facebook.com/search/top?q=school%20of%20hardknocks%20foundation%20-%20hardknocks%20ng&_rdc=1&_rdr'}>
                        <a target="_blank" rel="noreferrer">
                            <FaFacebookF className="mx-6 fa fa-brands fa-instagram fa-2x  text-darkBlue ease-in duration-200 hover:text-white"/>
                        </a>
                    </Link>

                    <Link href={'https://instagram.com/sohk_foundation_nigeria'}>
                        <a target="_blank" rel="noreferrer">
                            <FaInstagram className="mx-5 fa fa-brands fa-instagram fa-2x  text-darkBlue ease-in duration-200 hover:text-white"/>
                        </a>
                    </Link>

                    <Link href={'https://www.linkedin.com/company/hardknocksng/'}>
                        <a target="_blank" rel="noreferrer">
                            <FaLinkedinIn className="mx-5 fa fa-brands fa-linkedin fa-2x  text-darkBlue ease-in duration-200 hover:text-white"/>
                        </a>
                    </Link>

                    <Link href={'https://twitter.com/hardknocksng'}>
                        <a target="_blank" rel="noreferrer">
                            <FaTwitter className="mx-5 fa fa-brands fa-twitter fa-2x text-darkBlue ease-in duration-200 hover:text-white"/>
                        </a>
                    </Link>

                    <Link href='https://www.youtube.com/@School-of-Hardknocks-NG'>
                        <a target="_blank" rel="noreferrer">
                            <FaYoutube className="mx-5 fa fa-brands fa-Youtube fa-2x text-darkBlue ease-in duration-200 hover:text-white"/>
                        </a>
                    </Link>

                </div>
            </div>
        </div>
    );
}
