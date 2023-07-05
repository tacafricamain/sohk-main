/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { getPostBySlug, getAllPosts } from "../../utils/api";
import ContentSection from "../../components/ContentSection";
import Head from "next/head";
import Button from "../../components/Button";
import BlogEditor from "../../components/BlogEditor";
import { useRouter } from "next/router";
import Link from "next/link";
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton } from 'react-share';
import { ShareSocial } from 'react-share-social'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp
} from 'react-icons/fa';

const BlogPost = ({ post }) => {
  const [showEditor, setShowEditor] = useState(false);
  const router = useRouter();


  const dateString = post.date
const dateObj = new Date(dateString);

// Step 2: Define the options for formatting the date
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

// Step 3: Format the date using the options
const formattedDate = dateObj.toLocaleDateString('en-US', options);

  return (
    <>
      <Head>
        <title>{"Blog - " + post.title}</title>
        <meta name={post.title} content={post.preview} />
      </Head>
       {/* <Cursor /> */}
      {/* {!showEditor && ( */}
        <>
            <div
              className={`container px-10 mx-auto mt-10`}
            >
              {/* <Header isBlog={true} /> */}
              <div className="mt-16 flex flex-col overflow-hidden ">
                <img
                  className="w-full  rounded-xl shadow-lg object-cover mb-5"
                  src={post.image}
                  alt={post.title}
                ></img>

                <div className="flex justify-between">
                  <Link href={'/news&events/#blog' } >
                    <a>
                      <b className="text-4xl">&#8592;</b> Back To Blog
                    </a>
                  </Link>


                  <div className="flex justify-center my-6 ">

                    <a href={`whatsapp://send?text=${post.slug}`} data-action="share/whatsapp/share" target="_blank" rel="noreferrer">
                          <FaWhatsapp className="mx-6 fa fa-brands fa-whatsapp fa-2x  text-black ease-in duration-200 hover:text-black" />
                    </a>
                    {/* facebook */}
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.schoolofhardknocks.com.ng/news&events/${post.slug}`} target="_blank" rel="noreferrer">
                        <FaFacebookF className="mx-6 fa fa-brands fa-instagram fa-2x  text-black ease-in duration-200 hover:text-black"/>
                    </a>

                    <a href={`href="http://www.linkedin.com/shareArticle?mini=true&url=https://www.schoolofhardknocks.com.ng/news&events/${post.slug}`}  target="_blank" rel="noreferrer">
                        <FaLinkedinIn className="mx-5 fa fa-brands fa-linkedin fa-2x  text-black ease-in duration-200 hover:text-black"/>
                    </a>

                    <a href={`https://twitter.com/intent/tweet?url=https://www.schoolofhardknocks.com.ng/news&events/${post.slug}`} target="_blank" rel="noreferrer">
                        <FaTwitter className="mx-5 fa fa-brands fa-twitter fa-2x text-black ease-in duration-200 hover:text-black"/>
                    </a>


                </div>
                </div>

                  <h1
                    // ref={textOne}
                    className="mt-10 px-5 text-[40px] opacity-70 font-bold max-w-5xl mx-auto "
                    style={{paddingTop: '20px'}}
                  >
                    {post.title}
                  </h1>
                    <div className="flex mob:text-2xl opacity-70  max-w-5xl px-5 mt-10 mx-auto w-full">
                      <p className="w-full uppercase">School of hardKnocks</p>
                      <p className="w-full text-right">{formattedDate}</p>
                    </div>
              </div>
              <ContentSection content={post.content}></ContentSection>
              {/* <Footer /> */}
            </div>
            {process.env.NODE_ENV === "development" && (
              <div className="fixed bottom-6 right-6" onClick={() => setShowEditor(true)}>
                <Button type={"primary"} text='Edit this blog' />
              </div>
            )}
`        </>

       {/* ) } */}

      {showEditor && (
        <BlogEditor
          post={post}
          close={() => setShowEditor(false)}
          refresh={() => router.reload(window.location.pathname)}
        />
      )}
    </>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "date",
    "slug",
    "preview",
    "title",
    "tagline",
    "preview",
    "image",
    "content",
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
export default BlogPost;
