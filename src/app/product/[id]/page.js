import ProductDetails from "@/components/UI/ProductDetails";

const ProductDetailPage = async ({ params }) => {
  try {
    // const res = await fetch(
    //   `https://watch-gallery-server.vercel.app/product/${params.id}`,
    //   {
    //     cache: "no-store",
    //   }
    // );

    // if (!res.ok) {
    //   throw new Error(`HTTP error! Status: ${res.status}`);
    // }
    //const product = res.json();
    const product = {
      _id: "6552569187acea6e4d87da64",
      name: "Haylou GST",
      image: "https://live.staticflickr.com/65535/52953899202_478089ea5f_h.jpg",
      price: 31.99,
      features: [
        "1.69'' HD display",
        "Support 12 workout modes",
        "Support all-day heart rate and blood oxygen monitoring",
        "Support intelligent sleep monitoring",
        "IP68 dustproof and waterproof",
        "20 days of battery life",
      ],
      status: true,
      rating: 5,
    };
    //console.log("Product data:", product);

    return (
      <div>
        <ProductDetails key={product._id} product={product}></ProductDetails>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product details:", error);
    return <div>Error fetching product details</div>;
  }
};

export default ProductDetailPage;
