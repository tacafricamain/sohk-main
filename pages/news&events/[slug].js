/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { getPostBySlug, getAllPosts } from "../../utils/api";
import ContentSection from "../../components/ContentSection";
import Head from "next/head";
import Button from "../../components/Button";
import BlogEditor from "../../components/BlogEditor";
import { useRouter } from "next/router";
import Link from "next/link";

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

// Step 4: Print the formatted date
console.log(formattedDate); // Output: June 29, 2023

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

                <Link href={'/news&events/#blog' } >
                  <a>
                    `Back To Blog`
                  </a>
                </Link>

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
