import { IMG } from "../../assets/img";

const aboutData = [
  {
    icon: IMG.aboutIcon1,
    title: "High Yield Crop Solutions",
    text: "Boost productivity with nutrient-rich fertilizers and expert care. Ensure strong growth and healthy crops throughout every season.",
  },
  {
    icon: IMG.aboutIcon2,
    title: "Sustainable Farming Practices",
    text: "Eco-friendly methods for long-term soil health. Optimize resources while maintaining high-quality harvests and preserving the environment.",
  },
  {
    icon: IMG.aboutIcon3,
    title: "Innovative Planting Techniques",
    text: "Advanced techniques for efficient sowing, irrigation, and fertilization. Maximize yield and crop resilience across diverse farm conditions.",
  },
  {
    icon: IMG.aboutIcon4,
    title: "Healthy and Vibrant Fields",
    text: "Enhance crop vitality with balanced nutrients and precision farming. Achieve greener, more productive fields season after season.",
  },
];

const About = () => {
  return (
    <section
      className="container max-w-7xl mx-auto px-4 pt-10 md:pt-16 lg:pt-20"
      id="about-us"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={IMG.about}
            alt="about"
            loading="lazy"
            className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[500px] object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#22564b] leading-snug sm:leading-tight drop-shadow-md">
            Most Effective Crop Care Solutions
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-sgray leading-relaxed mt-4 md:mt-6">
            Strategic solutions for crop monitoring and yield optimization. Turn
            farming into a reliable, productive, and profitable endeavor.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 md:mt-10">
            {aboutData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 sm:w-14 sm:h-14"
                  loading="lazy"
                />
                <h5 className="text-[#22564b] text-xl sm:text-2xl font-bold">
                  {item.title}
                </h5>
                <p className="text-sgray text-sm sm:text-base leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
