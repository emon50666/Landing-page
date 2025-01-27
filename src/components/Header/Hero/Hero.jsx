import { FaPlayCircle } from "react-icons/fa";
const Hero = () => {
    return (
        <section className="relative  bg-[#12141D]   min-h-screen flex items-center justify-center ">
            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-80 mb-56 w-80  bg-gradient-to-r from-[#221837] to-[#BB2BFF] rounded-full blur-3xl opacity-25"></div>
            </div>
            <div className="text-center max-w-[511px] z-40 px-2  pt-32  ">
                <h1 className="text-4xl md:text-6xl font-semibold text-white leading-[40px]  md:leading-[60px] ">
                    Write better content for your{" "}
                    <span className="bg-gradient-to-r from-[#FC6639] to-[#FEC24d] text-transparent underline-offset-8 bg-clip-text underline decoration-[#FFC14d]">Facebook Ads</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 font-normal  mt-4">
                    Artificial intelligence writing tool helps you create blogs, social
                    media websites, and much more.
                </p>
                <div className="mt-8">
                    <button className="py-3 px-6 cursor-pointer bg-gradient-to-r  from-[#2B59FF] to-[#BB2BFF] text-white rounded-lg shadow-lg hover:opacity-90">
                        Start 14 Days Free Trial
                    </button> <br />
                    <p className="text-white mt-4  font-semibold pb-28 flex justify-center items-center mx-auto gap-2">
                        <span className="flex gap-3 items-center cursor-pointer">
                            <FaPlayCircle /> Watch A Demo
                        </span>
                    </p>

                </div>
            </div>

            {/* Right Green Box */}
            <div className="absolute  bottom-0 right-0 h-80 w-80 bg-gradient-to-r from-[#251627] via-[#251627] to-[#251627] blur-3xl"></div>
        </section>
    );
}

export default Hero;