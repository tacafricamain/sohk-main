/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import { ISOToDate,  } from "../../utils";
import { getAllPosts } from "../../utils/api";
import Newsletters from "../../components/newsletters";

const Blog = ({ posts }) => {
  const showBlog = useRef(true); //data.showBlog
  const text = useRef();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  const createBlog = () => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        router.reload();
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };

  const deleteBlog = (slug) => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/events", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
        }),
      }).then(() => {
        router.reload();
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };

  return (
    showBlog.current && (
      <>
        {/* {data.showCursor && <Cursor />} */}
        <Head>
          <title>Blog</title>
        </Head>
        <Newsletters />
        <div
          className={`container mx-auto mb-10
          ${
            ``// data.showCursor && "cursor-none"
          }
          `}
        >
          {/* <Header isBlog={true}></Header> */}
          <div className="mt-1 0">



            <section className="flex flex-col items-center w-full bg-white">
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
            <h1
              // ref={`${text}`}
              className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
            >
              Blog.
            </h1>
                  <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:grid-cols-2">

                  {posts &&
                    posts.map((post) => (

                    <figure className="relative fl ex" key={post.slug}
                        onClick={() => Router.push(`/news&events/${post.slug}`)}>
                    <img className="w-full bg-gray-200 w- 6/12"
                      src={post.image}
                      alt={`${post.title }`} width="1310" height="873" />

                      {/* <div className="flex flex-col m-5 "> */}
                        <p className="mt-5 text-2xl font-medium leading-6 text-black">
                        {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.preview}
                        </p>
                        {process.env.NODE_ENV === "development" && mounted && (
                            <div className="absolute top-0 right-0"  onClick={(e) => {
                              deleteBlog(post.slug);
                              e.stopPropagation();
                            }}>
                              <Button text="Delete"
                              />
                            </div>
                          )}
                      {/* </div> */}
                    </figure>
                    ))}
                  </div>
                </div>
              </section>



            {/* <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
              {posts &&
                posts.map((post) => (
                  <div
                    className="cursor-pointer relative"
                    key={post.slug}
                    onClick={() => Router.push(`/news&events/${post.slug}`)}
                  >
                    <img
                      className="w-full h-60 rounded-lg shadow-lg object-cover"
                      src={post.image}
                      alt={`${post.title }`}
                    ></img>
                    <h2 className="mt-5 text-4xl">{post.title}</h2>
                    <p className="mt-2 opacity-50 text-lg">{post.preview}</p>
                    <span className="text-sm mt-5 opacity-25">
                      {ISOToDate(post.date)}
                    </span>
                    {process.env.NODE_ENV === "development" && mounted && (
                      <div className="absolute top-0 right-0"  onClick={(e) => {
                        deleteBlog(post.slug);
                        e.stopPropagation();
                      }}>
                        <Button text="Delete"
                        />
                      </div>
                    )}
                  </div>
                ))}
            </div> */}
          </div>
        </div>
        {process.env.NODE_ENV === "development" && mounted && (
          <div className="fixed bottom-6 right-6"  onClick={createBlog} >
            <Button text='Add New Post' />
          </div>
        )}
      </>
    )
  );
};

export async function getStaticProps() {
  const posts = getAllPosts([
    "slug",
    "title",
    "image",
    "preview",
    "author",
    "date",
  ]);

  return {
    props: {
      posts: [...posts],
    },
  };
}

export default Blog;
