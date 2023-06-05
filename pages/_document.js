/* eslint-disable @next/next/no-head-element */
import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import loader from "../styles/loader";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                            "@context": "http://schema.org/",
                            "@type": "Sports complex",
                            "name": "School of HardKnocks Foundation Nigeria",
                            "alternateName": "SOHK Nigeria.",
                            "description": "As an NGO, SOHK brings together local and global subject matter experts from a multidisciplinary background of sports, academics, law enforcement agencies, social infrastructure, equipment manufacturers, and civil societies with a focus to solve Nigeria's social vices and challenges which include; Cultism, Prostitution, Kidnapping, Armed robbery, Rape etc. Through rehabilitation, mentoring, coaching, youth capacity development, specialised digital skills training and mental empowerment to grow and promote morally global young leaders in Nigeria through menthorship",
                            "url" : "https://www.schoolofhardknocks.com.ng/",
                        "Logo":"https://res.cloudinary.com/tacafrica/image/upload/v1685618893/my_folder/sohk/eka-06_3_q6297e.png",
                            "image" : "https://res.cloudinary.com/tacafrica/image/upload/v1685618893/my_folder/sohk/eka-06_3_q6297e.png",
                            "telephone": "+2349088559003",
                            "priceRange": " Free Consultation",
                            "openingHours" : "Mo-Sa 08:00-23:00, Sun 12:00-23:00",
                            "address":
                            {
                                "@type": "PostalAddress",
                                "streetAddress": "No 1 Sleekseed Crecent Chikakore District, Kubwa, Abuja Bwari Area Council 901101, Kubwa Federal Capital Territory",
                                "addressLocality": "Kubwa",
                                "addressRegion": "FCT",
                                "postalCode": "901101",
                                "addressCountry": "NG"
                            },
                            "sameAs":[
                            "https://instagram.com/sohk_foundation_nigeria",
                            "https://www.linkedin.com/company/hardknocksng/",
                            "https://twitter.com/hardknocksng",
                            "https://www.youtube.com/@School-of-Hardknocks-NG",
                        "https://web.facebook.com/search/top?q=school%20of%20hardknocks%20foundation%20-%20hardknocks%20ng&_rdc=1&_rdr",
                            ]
                        }
                        )
                        }}
                    />
                    <style>
                        {loader}
                    </style>
                </Head>
                {/* <head>
                </head> */}
                <body>
                <div id={'globalLoader'}>
                <div className='loaderani'>
                    <div className='loader loadera'></div>
                    <div className='loaderb'></div>
                    <div className="loader loader"> <span>Loading...</span></div>
                </div>
                </div>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
