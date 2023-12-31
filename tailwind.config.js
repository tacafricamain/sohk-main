/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                'print': {
                    'raw': 'print'
                }
            },
            boxShadow: {
                "main": "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            },
            fontFamily: {
                mavin: ['Space Grotesk'],
                mavinRegular: ['Space Grotesk'],
                SpaceGrotesk: ['Space Grotesk'],
                PanchangRegular: ['Space Grotesk'],
                PanchangBold: ['Space Grotesk'],
                PanchangSemibold: ['Space Grotesk'],
                PanchangExtrabold: ['Space Grotesk']
            },
            backgroundImage: {
                test: "url('https://res.cloudinary.com/tacafrica/image/upload/v1675094357/my_folder/TYB%20Golf%20Tour/YOD01520230112_p8l014.jpg')",
                test2:
                // "url('https://res.cloudinary.com/tacafrica/image/upload/v1675094357/my_folder/TYB%20Golf%20Tour/YOD01520230112_p8l014.jpg')",
                "url('https://res.cloudinary.com/tacafrica/image/upload/v1680704643/UN_Intl_Day_of_ZERO_WASTE/Screenshot_from_2023-04-05_15-23-32_hpcrma.png')",
                //
                mobileBG: "url('https://res.cloudinary.com/tacafrica/image/upload/v1675094357/my_folder/TYB%20Golf%20Tour/YOD01520230112_p8l014.jpg')",
                // "url('https://res.cloudinary.com/tacafrica/image/upload/v1669213192/my_folder/sohk/1-2208130110_r5s1up.jpg')",
                desktopBG: "url('https://res.cloudinary.com/tacafrica/image/upload/v1674564228/my_folder/UN_Education_Day-01-01-01-01_1_wwdkpq.png')",
                // "url('https://res.cloudinary.com/tacafrica/image/upload/v1660567320/my_folder/int%20youth%20day/1-2208130139_h5slq9.jpg')",
                membershipBgDesktop: "url('https://res.cloudinary.com/tacafrica/image/upload/v1669213718/my_folder/sohk/k_cc3pgg.png')",
                footerBG: "url('https://res.cloudinary.com/tacafrica/image/upload/v1661950975/my_folder/compressed/int_youth-day-compressed/1-2208130105_result_kuvblc.webp')",
                schoolProjectHeroBg: "url('https://res.cloudinary.com/tacafrica/image/upload/v1684419035/my_folder/school%20programs/hero_about_us_mbcs4x.jpg')",
                aboutUsHeroBg: "url('https://res.cloudinary.com/tacafrica/image/upload/v1686832204/my_folder/Website%20pics/Become_Like_Me_1_x126zl.png')",
                aboutUsSndImg: "url('https://res.cloudinary.com/tacafrica/image/upload/v1663155956/my_folder/mandella_and_chess_day/Screenshot_from_2022-09-14_12-44-11_zochqz.png')",
                whyWeDoThis: "url('https://res.cloudinary.com/tacafrica/image/upload/v1663166066/my_folder/int%20youth%20day/Screenshot_from_2022-09-14_15-33-13_fh3nuq.png')",
                buttonBG: "url('https://res.cloudinary.com/tacafrica/image/upload/v1684156514/my_folder/assets/Rectangle_15button_1_ultq6c.png')",
                popupImg: "url('https://res.cloudinary.com/tacafrica/image/upload/v1684160430/my_folder/assets/Rectangle_15button_1_gsafop.png')",
                aboutUsBestPartSec: "url('https://res.cloudinary.com/tacafrica/image/upload/v1661951046/my_folder/compressed/mandella-and-chess-day-compressed/1-2207230065_result_vm4qzp.webp')",
                aboutUsXploreSec: "url('https://res.cloudinary.com/tacafrica/image/upload/v1661951039/my_folder/compressed/mandella-and-chess-day-compressed/1-2207230069_result_pio8ig.webp')",
                newHomeImage: "url('https://res.cloudinary.com/tacafrica/image/upload/v1686759659/my_folder/Website%20pics/b0ef863b-99cf-4cac-aba0-79c5a08ca9e2_elz9hd.jpg')",
                droneTraining: "url('https://res.cloudinary.com/tacafrica/image/upload/v1687533112/my_folder/Website%20pics/drone_wczt3b.jpg')",
                mentorShipImage: "url('https://res.cloudinary.com/tacafrica/image/upload/v1682950895/drone_safety_day/IMG_1858_km2aag.jpg')",
                tennisImage: "url('https://res.cloudinary.com/tacafrica/image/upload/v1660567313/my_folder/int%20youth%20day/1-2208130100_llasyk.jpg')",
                taekwondoImage: "url('https://res.cloudinary.com/tacafrica/image/upload/v1660567184/my_folder/int%20youth%20day/1-2208130038_i3rttl.jpg')",
                golfImage: "url('https://res.cloudinary.com/tacafrica/image/upload/v1675095197/my_folder/Vitality%20Clubhouse%20Tour/YOD04420230112_btyvkz.jpg')",
                cyberSec: "url('https://res.cloudinary.com/tacafrica/image/upload/v1657883873/my_folder/projects/ageqfoxdysye0qngyp2h.jpg')",
                BlockChainTraining: "url('https://res.cloudinary.com/tacafrica/image/upload/v1657884036/my_folder/projects/vcnwvhyhee4fik6tefq7.jpg')"
            },
            colors: {
                gold: '#FA9600',
                orange: '#FF5151',
                softGrey: '#F7F5F2',
                greyBlack: '#10181A',
                blueHighLight: '#F2F6FF',
                softBlue: '#2B3CFC',
                darkBlue: '#141FC3'
            }
        }
    },
    variants: {
        extend: {
            fontFamily: ['hover', 'focus']
        }
    },

    plugins: [],
    corePlugins: {
        fontFamily: true
    }
};
