import { IMG } from "../assets/img";

const aboutData = [
  {
    icon: IMG.aboutIcon1,
    title: "Unique Environments",
    text: "Lectus arcu bibendum at varius vel pharetra vel nam at lectus",
  },
  {
    icon: IMG.aboutIcon2,
    title: "New Planting Solutions",
    text: "Urna duis convallis convallis tellus id enim eu turpis egestasae",
  },
  {
    icon: IMG.aboutIcon3,
    title: "Green And Stylish Lawn",
    text: "Eu tincidunt tortor aliquam nulla facilisi cras potenti nullam ac",
  },
  {
    icon: IMG.aboutIcon4,
    title: "Best Outdoor Space",
    text: "Tortor vitae purus faucibus ornare suspendisse sed sit ametdic",
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
            Most Satisfactory Lawn Maintenance Types
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-sgray leading-relaxed mt-4 md:mt-6">
            Sem fringilla ut morbi tincidunt augue. Sapien faucibus et molestie
            ac feugiat. Pretium viverra suspendisse potenti nullam. Dictum sit
            amet justo donec enim diam ut pharetra.
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
