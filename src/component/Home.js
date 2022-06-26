import React from "react";
import image from "../images/plantPic.jpg";

const Home = () => {
  return (
    <>
      <main>
        <img
          src={image}
          alt="plant-pic"
          className="absolute object-cover w-full h-full overflow-y-hidden	"
        />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-6 text-white ">
          <h1 className="text-6xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">
            Hello, I'm Abdul Subhan
          </h1>
        </section>
      </main>
    </>
  );
};

export default Home;
