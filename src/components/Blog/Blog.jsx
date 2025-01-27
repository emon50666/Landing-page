import { useState } from "react";
import icon_1 from "../../assets/images/icon-1.png";
import icon_2 from "../../assets/images/icon-2.png";
import icon_3 from "../../assets/images/icon-3.png";
import icon_4 from "../../assets/images/icon-4.png";

const Blog = () => {
    const tools = [
        {
            title: 'SEO Optimization',
            icon: icon_1,
            content: ['Optimize your content for better search rankings', 'Improve on-page SEO factors', 'Increase organic traffic', 'Create original content that ranks for SEO', 'Any mechanical keyboard enthusiasts in design?', 'The More Important the Work, the More Important the Rest', 'How to design a product that can grow itself 10x in year', 'Any mechanical keyboard enthusiasts in design?']
        },
        {
            title: 'Content Strategy',
            icon: icon_2,
            content: ['Plan and execute effective content strategies', 'Content calendars and planning', 'Data-driven content decisions']
        },
        {
            title: 'Social Media Ads',
            icon: icon_3,
            content: ['Run targeted social media ad campaigns', 'Measure ad performance', 'Optimize ad spending']
        },
        {
            title: 'Website Analytics',
            icon: icon_4,
            content: ['Analyze website traffic and user behavior', 'Track key performance indicators', 'Make data-backed improvements']
        },
        {
            title: 'Landing Pages',
            icon: icon_1,
            content: ['Create high-converting landing pages', 'A/B testing strategies', 'Landing page optimization tips']
        },
        {
            title: 'Email Marketing',
            icon: icon_2,
            content: ['Engage audiences with email campaigns', 'Increase open and click-through rates', 'Automate email workflows']
        }
    ];

    const [selectedTool, setSelectedTool] = useState(tools[0]);

    return (
        <div className="bg-[#12141D] text-white py-12 px-6 border-t border-gray-800  md:px-16 flex flex-col items-center">
            <h2 className="text-xl md:text-4xl max-w-md font-bold text-center pb-8">Boost Your Online Presence with Powerful Tools</h2>

            <div className="mt-8 flex flex-col md:flex-row gap-8 w-full max-w-4xl">
                <div className="flex flex-col gap-3 w-full md:w-1/3">
                    {tools.map((tool, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedTool(tool)}
                            className={`p-4 rounded-lg text-left cursor-pointer font-medium ${selectedTool.title === tool.title ? 'bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white' : 'border  border-[#2f323f] text-gray-300'}`}>
                            {tool.title}
                        </button>
                    ))}
                </div>
                <div className="relative w-full md:w-2/3 bg-[#292B37] p-6 rounded-lg backdrop-blur-md shadow-lg">
                    <div className="flex items-center space-x-2 mb-4">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <p className="text-gray-300 border-b border-[#2f323f]">4 Blog Headlines Generated</p>

                    <ul className="mt-4 text-gray-300 space-y-3">
                        {selectedTool.content.map((item, idx) => (
                            <li key={idx} className="border-b border-[#2f323f] ">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;
