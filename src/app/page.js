import Products from "@/components/UI/Products";
import React from "react";

const HomePage = async () => {
  const res = await fetch("https://watch-gallery-server.vercel.app/watches", {
    cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
  //console.log(data);
  return (
    <div>
      <h1 className="text-4xl text-center my-10">Welcome To Watch Gallery</h1>
      <div className="col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {data?.data.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
