const pricingPlans = [
    {
      title: "Starter Plan",
      price: "$29",
      duration: "/month",
      description: "This package is suitable for teams 1-15 people.",
      features: [
        "10 GB Dedicated Hosting Free",
        "Best for Developers, Freelancers",
        "1 Year Support",
      ],
      buttonText: "Get Started",
      buttonStyle: "border border-gray-600",
    },
    {
      title: "Basic Plan",
      price: "$79",
      duration: "/month",
      description: "This package is suitable for teams 1-50 people.",
      features: [
        "15 GB Dedicated Hosting Free",
        "Best for Developers, Freelancers",
        "5 Year Support",
        "Free Custom Domain",
        "Basic Statistics",
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-gradient-to-r  from-[#2B59FF] to-[#BB2BFF]",
    },
    {
      title: "Premium Plan",
      price: "$129",
      duration: "/month",
      description: "This package is suitable for teams 1-100 people.",
      features: [
        "20 GB Dedicated Hosting Free",
        "Best for Developers, Freelancers",
        "Unlimited Support",
        "Free Custom Domain",
        "Full Statistics",
      ],
      buttonText: "Get Started",
      buttonStyle: "border border-gray-600",
    },
  ];
  
  const PriceCard = () => {
    return (
      <div className="bg-[#12141D] text-white py-16 px-6 md:px-16 text-center">
        <h2 className="text-2xl md:text-4xl font-bold max-w-md justify-center mx-auto pb-1">Make the wise decision for your business</h2>
        <p className="text-gray-400 mt-2 max-w-md mx-auto">Choose from our affordable 3 packages</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-[#292B37] p-8 text-start lg:h-lvh flex flex-col justify-between rounded-xl shadow-lg">
              <div>
                <h3 className="text-xl font-semibold">{plan.title}</h3>
                <p className="text-4xl font-bold mt-4">{plan.price}<span className="text-lg font-normal text-gray-400">{plan.duration}</span></p>
                <p className="text-gray-400 mt-2">{plan.description}</p>
                <div className="mt-6 text-left">
                  <p className="font-semibold mb-2">{"What's"} included:</p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i}> {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className={`mt-6 cursor-pointer w-full text-white py-2 rounded-lg font-semibold ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PriceCard;