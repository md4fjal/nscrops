import About from "../components/home/about";
import Banner from "../components/home/banner";
import Contact from "../components/home/contact";
import Journey from "../components/home/journey";
import Products from "../components/home/products";
import Testimonials from "../components/home/testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Journey />
      <Products />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
