import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../Client";
const Post = () => {
  const [PostData, setPostData] = useState(null);
  console.log(PostData);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
         asset->{
          _id,
          url
         },
         alt
      }
    }`
      )
      .then((data) => {
        setPostData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main className="bg-blue-100 min-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl flex justify-center cursive">Blog Posts </h1>
          <h2 className="text-lg text-grey-600 flex justify-center mb-12">
            Welcome To My Blog Post Page
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PostData &&
              PostData.map((post, index) => (
                <article>
                  <Link
                    to={"/posts/" + post.slug.current}
                    key={post.slug.current}
                  >
                    <span
                      className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-400"
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                      <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className=" text-lg font-blog px-3 py-4 bg-blue-500 text-blue-100 bg-opacity-75 rounded">
                          {post.title}
                        </h3>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        </section>
      </main>

      {/* <main className="bg-blue-100 min-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl flex justify-center cursive">
            Blog Post Page{" "}
          </h1>
          <h2 className="text-lg text-grey-600 flex justify-center mb-12">
            Welcome To My Blog Post Page
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article>
              <Link>
                <span>
                  <img src="" alt="" />
                  <span>
                    <h3></h3>
                  </span>
                </span>
              </Link>
            </article>
          </div>
        </section>
      </main> */}
    </>
  );
};

export default Post;
