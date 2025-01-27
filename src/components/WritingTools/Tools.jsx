import icon_1 from "../../assets/images/icon-1.png";
import icon_2 from "../../assets/images/icon-2.png";
import icon_3 from "../../assets/images/icon-3.png";
import icon_4 from "../../assets/images/icon-4.png";

const Tools = () => {
  const tools = [
    { title: 'Blog Headlines', description: 'Write a better blog title with our AI tool.', icon: icon_1 },
    { title: 'Blog Intros', description: 'Generate a paragraph of blog content using Blog Intros tool.', icon: icon_2 },
    { title: 'Blog Outline', description: 'Need an attention-grabbing headline for your article?', icon: icon_3 },
    { title: 'Blog Conclusions', description: 'Write a better conclusion with AI writing tool.', icon: icon_4 },
    { title: 'Content Rewriter', description: 'Get AI writer to rewrite your sentence in a different way.', icon: icon_1 },
    { title: 'Product Description', description: 'Need an attention-grabbing headline for your article?', icon: icon_2 },
    { title: 'PAS Copywriting Formula', description: 'Get AI writer to rewrite your sentence in a different way.', icon: icon_3 },
    { title: 'Company About Us', description: 'Write a better blog title with our AI tool.', icon: icon_4 }
  ];

  return (
    <div className="bg-[#12141D] text-white py-12 px-6 md:px-16">
      <h2 className="text-xl md:text-4xl font-bold text-center">54 exciting writing tools</h2>
      <p className="text-center text-sm md:text-base text-gray-400 mt-2 max-w-sm justify-center mx-auto">AI engines take information from various sources and read them like a human would do.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {tools.map((tool, index) => (
          <div key={index} className="bg-[#292B37] p-3 rounded-2xl shadow-lg flex  gap-4">
            <img src={tool.icon} alt={tool.title} className="w-8 h-8" />
            <div>
              <h3 className="text-sm font-semibold">{tool.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a href="#" className="text-gray-100 text-lg font-semibold hover:underline">See all 54 available tools</a>
      </div>
    </div>
  );
};

export default Tools;
