/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
      },
      fontFamily: {
        mavin: ['mavin'],
        mavinRegular: ['mavinRegular'],
      },
      backgroundImage: {
        test: "url('https://res.cloudinary.com/tacafrica/image/upload/v1675094357/my_folder/TYB%20Golf%20Tour/YOD01520230112_p8l014.jpg')",
        test2:
          // "url('https://res.cloudinary.com/tacafrica/image/upload/v1675094357/my_folder/TYB%20Golf%20Tour/YOD01520230112_p8l014.jpg')",
          "url('https://res.cloudinary.com/tacafrica/image/upload/v1680704643/UN_Intl_Day_of_ZERO_WASTE/Screenshot_from_2023-04-05_15-23-32_hpcrma.png')",
          //
        mobileBG:
          "url('https://res.cloudinary.com/tacafrica/image/upload/v1675094357/my_folder/TYB%20Golf%20Tour/YOD01520230112_p8l014.jpg')",
          // "url('https://res.cloudinary.com/tacafrica/image/upload/v1669213192/my_folder/sohk/1-2208130110_r5s1up.jpg')",
        desktopBG:
          "url('https://res.cloudinary.com/tacafrica/image/upload/v1674564228/my_folder/UN_Education_Day-01-01-01-01_1_wwdkpq.png')",
          // "url('https://res.cloudinary.com/tacafrica/image/upload/v1660567320/my_folder/int%20youth%20day/1-2208130139_h5slq9.jpg')",
        membershipBgDesktop:
          "url('https://res.cloudinary.com/tacafrica/image/upload/v1669213718/my_folder/sohk/k_cc3pgg.png')",
        footerBG:
          "url('https://res.cloudinary.com/tacafrica/image/upload/v1661950975/my_folder/compressed/int_youth-day-compressed/1-2208130105_result_kuvblc.webp')",
        aboutUsHeroBg:
          "url('https://res.cloudinary.com/tacafrica/image/upload/v1663154890/my_folder/int%20youth%20day/Screenshot_from_2022-09-14_12-12-50_wjcct8.png')",
        aboutUsSndImg:
          "url('https://res.cloudinary.com/tacafrica/image/upload/v1663155956/my_folder/mandella_and_chess_day/Screenshot_from_2022-09-14_12-44-11_zochqz.png')",
        whyWeDoThis:
          "url('https://res.cloudinary.com/tacafrica/image/upload/v1663166066/my_folder/int%20youth%20day/Screenshot_from_2022-09-14_15-33-13_fh3nuq.png')",
      },
      colors: {
        gold: '#FA9600',
        orange: '#FF5151',
        softGrey: '#F7F5F2',
        greyBlack: '#10181A',
      },
    },
  },
  plugins: [],
};
