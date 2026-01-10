import { IMG } from "../../assets/img";

const Banner = () => {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center bg-blend-multiply bg-black/15 flex items-center justify-center text-center md:text-left py-16 sm:py-20 md:py-28 lg:py-40 transition-all duration-300"
      id="home"
      style={{ backgroundImage: `url(${IMG.bannerBg})` }}
    >
      <div className="relative container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center md:items-start justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-2xl animate-fadeIn">
          <span className="text-sblack text-sm sm:text-base md:text-lg font-medium uppercase tracking-wide">
            Growing Success, One Field at a Time
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-sgreen leading-snug sm:leading-tight md:leading-tight drop-shadow-md">
            Nourish Crops, Maximize Yield
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-sblack leading-relaxed max-w-full sm:max-w-xl md:max-w-2xl">
            Boost your harvest with our nutrient-rich, eco-friendly solutions.
            From sowing to harvest, we ensure thriving crops, sustainable
            farming, and abundant yields every season.
          </p>

          <a
            href="#contact-us"
            className="inline-block bg-sgreen text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 rounded-3xl hover:bg-slime hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
