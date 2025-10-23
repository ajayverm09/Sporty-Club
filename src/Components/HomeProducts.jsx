import React from "react";

const products = [
  {
    id: 1,
    title: "PING PONG BAT",
    price: 430,
    description: "Nam tempus turpis at metus scelerisque placerat nulla...",
    image:
      "https://sporto-theme.myshopify.com/cdn/shop/products/shop-31_f5ff5fb6-9fd4-4a5a-a7e3-98497c16e854_600x.jpg?v=1640260672",
  },
  {
    id: 2,
    title: "BOXING GLOVES",
    price: 500,
    description: "Nam tempus turpis at metus scelerisque placerat nulla...",
    image:
      "https://sporto-theme.myshopify.com/cdn/shop/products/shop-25_f2e076eb-e077-42f0-9280-aaf26711aa50_600x.jpg?v=1640260650",
  },
  {
    id: 3,
    title: "BODY BUILDING EQUIPMENT",
    price: 370,
    description: "Nam tempus turpis at metus scelerisque placerat nulla...",
    image:
      "https://sporto-theme.myshopify.com/cdn/shop/products/shop-17_600x.jpg?v=1640260647",
  },
];

export default function StylishProducts() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-12 sm:py-16 md:py-20 text-white text-center"
      style={{
        backgroundImage: `url('https://sporto-theme.myshopify.com/cdn/shop/files/product-bg.png?v=1637757320')`,
      }}
    >
      <div className="relative container mx-auto px-4 sm:px-6">
        <p className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-gray-200 mb-2">
          Trending Items
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase mb-8 sm:mb-10 md:mb-12">
          Stylish Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white text-black rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div className="p-4 sm:p-6 flex justify-center items-center bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="p-4 sm:p-6 text-left flex flex-col grow">
                <h3 className="text-base sm:text-lg font-extrabold uppercase text-red-700 mb-2 sm:mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <p className="text-lg sm:text-xl font-bold text-red-700 mb-3 sm:mb-4">
                    Rs. {product.price.toFixed(2)}
                  </p>
                  <button className="w-full sm:w-auto bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold uppercase text-xs sm:text-sm hover:bg-red-700 transition-colors">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}