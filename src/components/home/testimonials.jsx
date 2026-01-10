import { useState } from "react";
import { IMG } from "../../assets/img";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Stephen Park",
      country: "Canada",
      image: IMG.testUser1,
      text: "These fertilizers transformed my farm! My crops are healthier, greener, and yields have increased significantly. Highly recommend their solutions for any farmer.",
    },
    {
      id: 2,
      name: "Marisol Peter",
      country: "Australia",
      image: IMG.testUser2,
      text: "Exceptional service and quality products. Our fields have never looked better, and harvests are consistently abundant. Truly a game-changer for sustainable farming.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="bg-[#f7f7f1] py-16 px-6 md:px-20 overflow-hidden mt-10 md:mt-16 lg:mt-20"
      id="clients"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h4 className="text-md font-semibold uppercase tracking-wide text-sblack">
            Client Testimonials
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#22564b] mt-2 mb-4">
            What Our Farmers Say
          </h2>
          <p className="text-sgray mb-10 max-w-xl">
            Our clients trust us for healthier crops and higher yields. Read how
            our premium fertilizers and expert solutions have transformed their
            farms.
          </p>

          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="min-w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {testimonials.map((t) => (
                    <div key={t.id} className="bg-swhite p-6 md:p-8 shadow-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={t.image}
                          alt={t.name}
                          loading="lazy"
                          className="w-14 h-14 rounded-full object-cover"
                        />
                        <div>
                          <h5 className="text-lg font-semibold text-[#0c3b32]">
                            {t.name}
                          </h5>
                          <p className="text-gray-700 text-sm">{t.country}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{t.text}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-[#0c3b32] scale-110"
                    : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center lg:justify-end">
          <img
            src={IMG.testimonialRight}
            loading="lazy"
            alt="Customer"
            className="object-cover max-h-[550px] w-full md:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
