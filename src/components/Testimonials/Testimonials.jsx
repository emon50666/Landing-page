import { FaTwitter } from 'react-icons/fa';

import review_1 from "../../assets/images/review-1.png";
import review_2 from "../../assets/images/review-2.png";
import review_3 from "../../assets/images/review-3.png";
import review_4 from "../../assets/images/review-4.png";
import review_5 from "../../assets/images/review-5.png";
import review_6 from "../../assets/images/review-6.png";
import review_7 from "../../assets/images/review-7.png";
import review_8 from "../../assets/images/review-8.png";


const testimonials = [
  { name: 'Darrell Steward', handle: '@darrells', text: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.', hashtag: '#another' ,image:review_1},
   { name: 'Leslie Alexander', handle: '@leslie', text: 'Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.', hashtag: '#postcrafts',image:review_2  },
  { name: 'Jenny Wilson', handle: '@jennywilson', text: 'This is a top-quality product. No need to think twice before making it live on web.', hashtag: '#make_it_fast ' ,image:review_3},
  { name: 'Kristin Watson', handle: '@kristinwatson12', text: 'Finally, I’ve found a template that covers all bases for a bootstrapped startup.', hashtag: '#postcrafts'  ,image:review_4},
  { name: 'Guy Hawkins', handle: '@guyhawkins', text: 'This is a top-quality product. No need to think twice before making it live on web.', hashtag: '#make_it_fast ',image:review_5 },
  { name: 'Marvin McKinney', handle: '@marvinm', text: 'With Postcrafts, it’s quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency.', hashtag: '#dev #tools' ,image:review_6 },
  { name: 'Annette Black', handle: '@annetteb', text: 'You made it so simple. My new site is so much faster and easier to work with than my old site.', hashtag: '#another',image:review_7 },
   { name: 'Floyd Miles', handle: '@floydmiles', text: 'My new site is so much faster and easier to work with than my old site.', hashtag: '#postcrafts',image:review_8  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#12141D] text-white py-16 px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">What our customers say</h2>
      <p className="text-gray-400 mt-2 max-w-md mx-auto">
        Read why thousands of marketers, writers, and entrepreneurs love us so much.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white text-black p-2 rounded-xl shadow-lg flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-semibold text-sm">{testimonial.name}</h3>
                <p className="text-gray-500 text-start">{testimonial.handle}</p>
              </div>
              <FaTwitter className="text-blue-500 ml-auto text-xl" />
            </div>
            <p className="text-gray-700 text-start">{testimonial.text}</p>
            <p className="text-blue-600 text-start font-medium">{testimonial.hashtag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
