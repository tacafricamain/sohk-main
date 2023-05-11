/* eslint-disable @next/next/no-img-element */
import React from 'react'
// import { consultants, founder, secretariat, coaches } from '../api/staffData.json'
import item from '../api/staffData.json'
import Head from 'next/head'

const data = [
  item.consultants,
  item.founder,
  item.secretariat,
  item.coaches
].flat()

const Profile = ({ profile }) => {
  return (
    <>
      <Head>
        <title>{profile[0].name}</title>
        <meta name={profile[0].name} />
      </Head>
      <div className="container lg:px-5 pt-8 lg:py-32 space-x-4 mx-auto">
        <div className='flex flex-col md:flex-row lg:w-10/12 lg:rounded-xl overflow-hidden mx-auto lg:max-h-[532.75px]'>
          <span className='lg:w-2/4'>
            <img src={profile[0].image} alt={profile[0].name} className="w-full object-cover" />
            
          </span>
          <div className="lg:w-2/4 relative flex flex-col w-full bg-[#071238] p-8">
            <img src='https://res.cloudinary.com/tacafrica/image/upload/v1683725188/my_folder/TACteam/Polygon_1_ejxvxz.png' alt={profile[0].name} className="absolute z-50 h-24 -left-12 top-[43%] " />
            <div className='my-auto'>
              <h1 className="sm:text-3xl text-2xl mb-2 text-white uppercase font-semibold">{profile[0].name}</h1>
              <h2 className="text-base font-medium mb-4 text-white">{profile[0].designation}</h2>
              <p className="mt-4 max-w-xl text-white lg:text-sm sm:text-xl sm:leading-relaxed">{profile[0].about} </p>
              <p className="mt-4 max-w-xl text-white lg:text-sm sm:text-xl sm:leading-relaxed">{profile[0].about2} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export const getStaticProps = async ({ params }) => {
    let filtered = () => {
      return data.filter((profile) => {
          return profile.slug === params.slug 
        })
    }
  
  let res = filtered()
    return {
      props: {
        profile : res
      },
    }
}

export const getStaticPaths = async () => {
  const posts = data
  const paths = posts.map((post, i) => ({ params: { slug: `${post.slug}` } }))
  return {
    paths,
    fallback: false
  }
}

export default Profile;