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
      <div className="container flex flex-col md:flex-row px-5 py-24 mx-auto space-x-4">
        <span>
          <img src={profile[0].image} alt={profile[0].name} className=" object-cover"/>
        </span>
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{profile[0].name}</h1>
          <p className="mt-4 max-w-xl text-gray-500 lg:text-2xl sm:text-xl sm:leading-relaxed">{profile[0].about} </p>
        </div>
          <div key={5} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-8 " >
            
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