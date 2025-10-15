import { IMG } from "../assets/img";

const products = [
  {
    image: IMG.product1,
    category: "Exotic",
    title: "House Pot Plants",
    price: "Rs. 399.00",
  },
  {
    image: IMG.product2,
    category: "Exotic",
    title: "House Pot Plants",
    price: "Rs. 399.00",
  },
  {
    image: IMG.product3,
    category: "Exotic",
    title: "House Pot Plants",
    price: "Rs. 399.00",
  },
  {
    image: IMG.product4,
    category: "Exotic",
    title: "House Pot Plants",
    price: "Rs. 399.00",
  },
];

const Products = () => {
  return (
    <section
      className="container max-w-7xl mx-auto px-4 pt-10 md:pt-16 lg:pt-20"
      id="products"
    >
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <span className="text-sblack text-lg sm:text-xl md:text-2xl font-semibold">
            GREAT SALES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#22564b] leading-snug sm:leading-tight">
            Our Finest Seller
          </h1>
        </div>

        <a
          href="#"
          className="hidden sm:inline-block bg-[#22564b] text-white font-semibold text-lg px-6 py-2.5 rounded-3xl hover:bg-slime hover:scale-105 transform transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg"
        >
          View More
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start text-center md:text-left group"
          >
            <div className="w-full h-56 sm:h-64 md:h-72 flex items-center justify-center bg-[#e1ead24d] overflow-hidden rounded-lg shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <h3 className="text-[#22564b] text-xl font-semibold mt-4">
              {item.category}
            </h3>
            <p className="text-sgray text-base">{item.title}</p>
            <span className="text-sblack font-bold mt-1">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
