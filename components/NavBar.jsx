/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaBars } from "react-icons/fa"
import Button from "./Button";
import Link from "next/link";
import DropDownButton from "./dropdown/dropdown";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [menuState, setMenuState] = React.useState(false);

  const data = [
    {href: '/pilot_school_project', name: 'SOHK PILOT SCHOOL PROGRAM TO SCHOOLS'},
    {href: '/Digital_skills_&_Golf/GOLF_FOR_PRIMARY_SCHOOLS', name: 'GOLF FOR PRIMARY SCHOOLS '},
    {href: '/Digital_skills_&_Golf/GOLF_FOR_JUNIOR_SECONDARY_SCHOOLS', name: 'GOLF FOR JUNIOR SECONDARY SCHOOLS'},
    { href: '/Digital_skills_&_Golf/GOLF_FOR_SENIOR_SECONDARY_SCHOOLS', name: 'GOLF FOR SENIOR SECONDARY SCHOOLS' },
  ]

  const about = [
    { href: '/aboutus', name: 'About Us' },
    { href: '/our_team', name: 'Our team' },
  ]

  const register = [
    { href: '/pdf/TAC Community Hub Membership form.pdf', name: 'Membership Form' },
    {href: 'https://forms.gle/KP6BtvUhu83AH1sz8', name: 'Subject Matter Expert Registration'}
  ]

  return (
    <div className='absolute w-screen z-50  '>
      <nav className="relative flex flex-wrap items-center justify-between z-20">
        <div className="w-screen mx-auto flex flex-wrap items-center justify-between bg-white py-4 ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-sm font-bold leading-relaxed inline-block md:hidden mx-4 py-2 whitespace-nowrap text-white "
              >
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1685618893/my_folder/sohk/eka-06_3_q6297e.png" alt="" className="w-16" />
              </a>
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
            <ul className="flex flex-col lg:flex-row list-none lg:mx-auto"  >
              <li className="nav-item my-auto">
                <Link href="/">
                  <a
                    className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-black ease-in duration-200 hover:opacity-65"
                  >
                  <img src="/nav_icons/home.png" alt="home" className="w-5 h-5 lg:hidden" />
                  <span className="lg:ml-2 font-medium rounded-lg text-sm 2xl:text-lg px-5 lg:px-4 py-2.5 text-center" onClick={() => setNavbarOpen(!navbarOpen)}>Home</span>
                  </a>
                </Link>
              </li>

              <DropDownButton
                  label={'About Us'}
                  key={'About'}
                  content={about}
                  setMenuState={setMenuState}
                  menuState={menuState}
                  navbarOpen={navbarOpen}
                  setNavbarOpen={setNavbarOpen}
                  icon={'ourTeam.png'}
              />

              <li className="nav-item my-auto">
                <Link href="/news&events">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-black ease-in duration-200 hover:opacity-65"
                >
                  <img src="/nav_icons/News&Events.png" alt="" className="w-5 lg:hidden" />
                  <span className="lg:ml-2 font-medium rounded-lg text-sm 2xl:text-lg px-5 lg:px-4 py-2.5 text-center" onClick={() => setNavbarOpen(!navbarOpen)}>News & Events</span>
                </a>
                </Link>
              </li>


              <Link href="/">
              <a
                className="text-sm font-bold leading-relaxed hidden md:inline-block mx-14 py-2 whitespace-nowrap text-white "
              >
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1685618893/my_folder/sohk/eka-06_3_q6297e.png" alt="" className="w-16" />
              </a>
            </Link>

              <DropDownButton
                label={'School Projects'}
                key={'School Projects'}
                content={data}
                setMenuState={setMenuState}
                menuState={menuState}
                navbarOpen={navbarOpen}
                setNavbarOpen={setNavbarOpen}
                icon={'SchoolProjects.png'}
              />

              <li className="nav-item my-auto">
              <Link href="/gallery">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-black ease-in duration-200 hover:opacity-65"
                  >
                  <img src="/nav_icons/gallery.png" alt="" className="w-5 lg:hidden" />
                  <span className="lg:ml-2 font-medium rounded-lg text-sm 2xl:text-lg px-5 lg:px-4 py-2.5 text-center" onClick={() => setNavbarOpen(!navbarOpen)}>Gallery</span>
                </a>
                </Link>
              </li>

              <DropDownButton
                label={'Register'}
                key={'Register'}
                content={register}
                setMenuState={setMenuState}
                menuState={menuState}
                navbarOpen={navbarOpen}
                setNavbarOpen={setNavbarOpen}
                icon={'SchoolProjects.png'}
              />

              <Link href="/donate">
                <a >
                  <span className="my-auto ml-3">
                    <Button text={'Donate'} extraStyles={'border-2 border-black bg-white text-black '} />
                  </span>
                </a>
              </Link>

            </ul>
          </div>
        </div>
      </nav>
     </div>
  );
}
