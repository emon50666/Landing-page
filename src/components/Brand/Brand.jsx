import brand_1 from "../../assets/images/brand-1.png"
import brand_2 from "../../assets/images/brand-2.png"
import brand_3 from "../../assets/images/brand-3.png"
import brand_4 from "../../assets/images/brand-4.png"
import brand_5 from "../../assets/images/brand-5.png"
import brand_6 from "../../assets/images/brand-6.png"
import brand_7 from "../../assets/images/brand-7.png"
import brand_8 from "../../assets/images/brand-8.png"

const Brand = () => {
    return (
      <section>
       <div className="bg-[#12141D] border-t border-gray-800  pt-14 pb-14">
        <h1 className="text-center text-white pb-10">Trusted by nearly 5000+ paying customers</h1>
       <div className="grid max-w-[940px] pl-9 md:pl-16  lg:pl-20 w-full justify-center mx-auto space-y-4  grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            <img src={brand_1} alt="brand image" className="w-24" />
            <img src={brand_2} alt="brand image" className="w-24" />
            <img src={brand_3} alt="brand image" className="w-24" />
            <img src={brand_4} alt="brand image" className="w-24" />
            <img src={brand_5} alt="brand image" className="w-24" />
            <img src={brand_6} alt="brand image" className="w-24" />
            <img src={brand_7} alt="brand image" className="w-20" />
            <img src={brand_8} alt="brand image" className="w-24" />
        </div>
       </div>
      </section>
    );
};

export default Brand;
