/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mavin': ['mavin'],
        'mavinRegular': ['mavinRegular']
      },
      backgroundImage: {
        'test': "url('https://res.cloudinary.com/tacafrica/image/upload/v1663587468/my_folder/int%20youth%20day/compressed/1-2208130077_result_czg3ww.webp')",
        'test2': "url('https://res.cloudinary.com/tacafrica/image/upload/v1663587448/my_folder/int%20youth%20day/compressed/1-2208130106_result_m3lfbz.webp')",
        'mobileBG': "url('https://res.cloudinary.com/tacafrica/image/upload/v1661883004/my_folder/int%20youth%20day/mobileHome_mymzw9.png')",
        'desktopBG': "url('https://res.cloudinary.com/tacafrica/image/upload/v1660567320/my_folder/int%20youth%20day/1-2208130139_h5slq9.jpg')",
        'membershipBgDesktop': "url('https://res.cloudinary.com/tacafrica/image/upload/v1661951200/my_folder/compressed/tennis-championship-compressed/1-2208070080_result_szlrig.webp')",
        'footerBG': "url('https://res.cloudinary.com/tacafrica/image/upload/v1661950975/my_folder/compressed/int_youth-day-compressed/1-2208130105_result_kuvblc.webp')",
        'aboutUsHeroBg': "url('https://res.cloudinary.com/tacafrica/image/upload/v1663154890/my_folder/int%20youth%20day/Screenshot_from_2022-09-14_12-12-50_wjcct8.png')",
        'aboutUsSndImg': "url('https://res.cloudinary.com/tacafrica/image/upload/v1663155956/my_folder/mandella_and_chess_day/Screenshot_from_2022-09-14_12-44-11_zochqz.png')",
        'whyWeDoThis': "url('https://res.cloudinary.com/tacafrica/image/upload/v1663166066/my_folder/int%20youth%20day/Screenshot_from_2022-09-14_15-33-13_fh3nuq.png')"
      },
      colors: {
        'gold': '#FA9600',
        'orange': '#FF5151',
        'softGrey': '#F7F5F2',
        'greyBlack': '#10181A'
      },
    },
  },
  plugins: [],
}