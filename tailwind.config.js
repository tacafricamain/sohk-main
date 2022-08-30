/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobileBG': "url('https://res.cloudinary.com/tacafrica/image/upload/v1661883004/my_folder/int%20youth%20day/mobileHome_mymzw9.png')",
        'desktopBG': "url('https://res.cloudinary.com/tacafrica/image/upload/v1660567320/my_folder/int%20youth%20day/1-2208130139_h5slq9.jpg')",
      },
    },
  },
  plugins: [],
}