/* eslint-disable @next/next/no-head-element */
import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import loader from "../styles/loader";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <head>
                    <style>
                        {loader}
                    </style>
                </head>
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