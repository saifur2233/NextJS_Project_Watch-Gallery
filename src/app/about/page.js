import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <Image
            src={`https://i.ibb.co/zsGTNtW/3.png`}
            className="max-w-md rounded-lg shadow-2xl"
            width={600}
            height={600}
            alt="Picture of the author"
          />
          <div>
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">
              Welcome to our captivating online Watch Gallery, a digital haven
              for horology enthusiasts and those seeking timeless elegance in
              timekeeping. Crafted with precision and powered by Next.js, our
              website seamlessly merges the worlds of sophistication and
              technology, delivering a unique and immersive experience for watch
              aficionados.
            </p>
            <button className="btn btn-accent text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
