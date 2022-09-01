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
        'mobileBG': "url('https://res.cloudinary.com/tacafrica/image/upload/v1661883004/my_folder/int%20youth%20day/mobileHome_mymzw9.png')",
        'desktopBG': "url('https://res.cloudinary.com/tacafrica/image/upload/v1660567320/my_folder/int%20youth%20day/1-2208130139_h5slq9.jpg')",
        'membershipBgDesktop': "url('https://res.cloudinary.com/tacafrica/image/upload/v1661951200/my_folder/compressed/tennis-championship-compressed/1-2208070080_result_szlrig.webp')"
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