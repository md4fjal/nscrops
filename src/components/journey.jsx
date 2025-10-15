import { IMG } from "../assets/img";

const aboutData = [
  { count: "270", title: "Top Projects" },
  { count: "15", title: "Current Projects" },
  { count: "32", title: "Finished Projects" },
];

const Journey = () => {
  return (
    <section
      className="container max-w-7xl mx-auto px-4 pt-10 md:pt-16 lg:pt-20"
      id="journey"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div
          className="flex items-center justify-center bg-cover bg-no-repeat bg-center border-4 sm:border-8 border-[#22564b] py-16 sm:py-20 md:py-24"
          style={{ backgroundImage: `url(${IMG.journeyBg})` }}
        >
          <div className="flex flex-col items-center gap-2 sm:gap-3 text-center bg-white/70 px-4 sm:px-6 py-4 sm:py-6 rounded-lg backdrop-blur-sm">
            <h5 className="text-[#22564b] text-6xl sm:text-7xl lg:text-[120px] xl:text-[150px] font-bold leading-none">
              25
            </h5>
            <p className="text-sblack text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-none">
              Years
            </p>
            <p className="text-sblack text-xl sm:text-2xl font-semibold uppercase mt-1 sm:mt-2">
              Experience
            </p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <span className="text-sblack text-lg sm:text-xl md:text-2xl font-semibold">
            Check About Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#22564b] leading-snug sm:leading-tight drop-shadow-md mt-2 sm:mt-3">
            A Beautiful Garden With Flowers Grow
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-sgray leading-relaxed mt-4 md:mt-6">
            Volutpat lacus laoreet non curabitur gravida arcu ac tortor
            dignissim. Dolor sit amet consectetur adipiscing elit pellentesque.
            Ac feugiat sed lectus velit sed ullamcorper.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 mt-8 md:mt-10">
            {aboutData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center"
              >
                <h5 className="text-sblack text-4xl sm:text-5xl lg:text-7xl font-bold leading-none">
                  {item.count}
                </h5>
                <p className="text-[#22564b] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
