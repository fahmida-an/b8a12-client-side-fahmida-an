import Typewriter from "typewriter-effect";
import useTestimonial from "../../hooks/useTestimonial";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Testimonial = () => {
  const [testimonial] = useTestimonial();
  return (
    <>
      <div className="text-center items-center justify-center mb-24">
        <h2 className="text-4xl font-bold">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 200,
              strings: "User Reviews",
            }}
          ></Typewriter>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4">
        {testimonial.map((test) => (
          <div key={test._id} className="bg-gray-100">
            <div className="max-w-sm h-[200px] p-6 space-y-5  bg-gray-200 border hover:bg-white hover:shadow-2xl border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {test.name}
              </h5>
              <Rating style={{ maxWidth: 180 }} value={test.rating} readOnly />

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {test.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
