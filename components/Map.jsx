import React from 'react'

export default function Map() {
  return (
    <div className="map">
        <h2 className="text-3xl p-6 text-center font-mavin bg-slate-100 " >Come Visit Us At the TAC community Hub</h2>
        <div className="h-[80vh]">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.7013032334535!2d7.341990300000001!3d9.1813933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd9fc990fcb29%3A0xf260b1e8512372ff!2sTAC%20Africa%20Community%20Hub!5e0!3m2!1sen!2sng!4v1662564357096!5m2!1sen!2sng"
               
                allowFullScreen=""
                style={{ border: "0", height: '80vh', width: '100%' }}
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
  )
}
