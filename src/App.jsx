import About from "./components/AboutUs/About";
import Blog from "./components/Blog/Blog";
import Brand from "./components/Brand/Brand";
import Header from "./components/Header/Header";
import Hero from "./components/Header/Hero/Hero";
import PriceCard from "./components/PricingCard/PriceCard";
import Testimonials from "./components/Testimonials/Testimonials";
import Tools from "./components/WritingTools/Tools";


const App = () => {
  return (
    <div className="">
   <div className="absolute z-50 w-full">
   <Header/>
   </div>
   <Hero/>
   <Brand/>
   <About/>
   <Tools/>
   <Blog/>
   <Testimonials/>
   <PriceCard/>
    </div>
  );
};

export default App;