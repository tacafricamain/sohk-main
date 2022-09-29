import React from "react";
import { FaBars } from "react-icons/fa"
import Button from "./Button";
import Link from "next/link";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  

  return (
    <div className='absolute w-screen'>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 z-20 md:h-[20vh]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
              href="#pablo"
            >
              {/* pink Tailwind Starter Kit */}
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item my-auto">
                <Link href="/">
                  <a
                    className="px-12 py-2 flex items-center justify-center text-xs font-bold leading-snug text-white hover:opacity-75" 
                  >
                  <span className="ml-2 text-lg font-normal">Home</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item my-auto">
                <Link href="/aboutus">
                  <a
                    className="px-12 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                    
                  >
                    <span className="ml-2 text-lg font-normal">About Us</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item my-auto">
                <a
                  className="px-12 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                  href="#services"
                >
                  <span className="ml-2 text-lg font-normal">Services</span>
                </a>
              </li>
              <li className="nav-item my-auto">
                <a
                  className="px-12 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                  href="#activities"
                >
                  <span className="ml-2 text-lg font-normal">Events</span>
                </a>
              </li>
              <Button text={'Discover More'}/>
            </ul>
          </div>
        </div>
      </nav>
     </div>
  );
}
