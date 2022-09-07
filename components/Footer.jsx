/* eslint-disable react/jsx-key */
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { 
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

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
    'Become A Member'
  ]

  return (
    <div className="bg-fixed bg-center bg-cover bg-footerBG" style={{backgroundAttachment: 'scroll' }}>
      <div className="pt-12 flex flex-col justify-between pb-12 text-white md:h-[80vh]" style={{background: 'rgba(0, 0, 0, 0.69)' }}>
        <div className="container mx-auto sm:px-4 max-w-full ">
          <div className="container mt-md-5">
            <div className="flex flex-wrap ">
              <div className="md:w-1/3 pr-4 pl-4">
                <div className="flex">
                  <div className="max-w-xs">
                    <div>
                      <h3 className="font-bold text-xl text-white">
                        ABOUT US
                      </h3>
                      <p className="">
                      
                      </p>
                    </div>

                    <div className="">
                      <Link href="/">
                        <a style={{ color: 'white' }}>READ MORE</a>
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
                        <ul>
                            {data.map((item, i) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 pr-4 pl-4">
                <div className="flex flex-wrap ">
                  <div className=" xl:w-full pr-4 pl-4">
                    <h3 className="w-full mt-0 mb-0 pt-0 pb-2 pl-0 pr-0 font-bold text-xl text-white uppercase">
                      get in touch
                    </h3>
                    <div className="">
                      <p className="text-sm mb-1 text-white">
                       
                      </p>
                      <hr className="w-4/5" />
                    </div>

                    <div className="">
                      <p className="text-sm mb-1 text-white">
                        TAC Community Hub: No.1 Sleekseed Crescent,
                        Chikakore District, Kubwa, Abuja
                      </p>
                      <hr className="w-4/5" />
                    </div>

                    <div className="">
                      <p className="text-sm mb-1 text-white">
                        phone: +234 706 224 7581
                      </p>
                      <hr className="w-4/5" />
                    </div>

                    <div className="">
                      <p className="text-sm mb-1 text-white">
                        email: contactus@schoolofhardknocks.com.ng
                      </p>
                      <hr className="w-4/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-6">
          {/* facebook */}
          <Link href={'https://www.facebook.com/profile.php?id=100084838556925'}>
            <a target="_blank" rel="noreferrer">
                <FaFacebookF className="mx-4 fa fa-brands fa-instagram fa-2x text-white" />
            </a>
          </Link>
          <Link href={'https://instagram.com/hardknocksng?igshid=YmMyMTA2M2Y'}>
            <a target="_blank" rel="noreferrer">
              <FaInstagram className="mx-4 fa fa-brands fa-instagram fa-2x text-white" />
            </a>
          </Link>
          <Link href={'https://www.linkedin.com/company/hardknocksng/'}>
            <a target="_blank" rel="noreferrer">
              <FaLinkedinIn className="mx-4 fa fa-brands fa-linkedin fa-2x text-white" />
            </a>
          </Link>
          <Link href={'https://twitter.com/hardknocksng'}>
            <a target="_blank" rel="noreferrer">
              <FaTwitter className="mx-4 fa fa-brands fa-linkedin fa-2x text-white" />
            </a>
          </Link>
          {/* <Link href={'https://www.youtube.com/channel/UCsOPBwlkXfJspo22MJcC8NA'}>
            <a target="_blank" rel="noreferrer">
              <FaYoutube className="mx-2 fa fa-brands fa-youtube fa-2x text-white " />
            </a>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

// AIzaSyBu_w9W9QpvzHO99eHf5s0n3NIjw-jb-m0