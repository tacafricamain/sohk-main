/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import React from 'react'
import Founder from './founder'
import Coaches from './coaches'
import Consultants from './consultants'
import Secretariat from './secretariat'

export default function Index() {
  return (
    <>
        <Head>
          <title>Our Team</title>
          <meta name='Our team' />
        </Head>
      <div className='pb-20 bg-slate-100'>
        <h1 className=' text-blue-700 mt-10 text-center text-4xl uppercase font-semibold'> Our Team</h1>
        <Founder />
        <Consultants />
        <Coaches />
        <Secretariat />
      </div>
    </>
  )
}
