import About from "./components/AboutUs/About";
import Brand from "./components/Brand/Brand";
import Header from "./components/Header/Header";
import Hero from "./components/Header/Hero/Hero";


const App = () => {
  return (
    <div className="">
   <div className="absolute z-50 w-full">
   <Header/>
   </div>
   <Hero/>
   <Brand/>
   <About/>
    </div>
  );
};

export default App;