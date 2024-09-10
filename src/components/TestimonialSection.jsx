import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Mike taylor",
    location: "Lahore, Pakistan",
    image: "/assets/profile.png",
    quote:
      '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
  },
  {
    id: 2,
    name: "Chris Thomas",
    location: "CEO of Red Button",
    image: "/assets/profile.png",
    quote:
      '"Another testimonial quote goes here. This is a placeholder for demonstration purposes."',
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-gradient-to-r from-[#FFCACE] to-white flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between">
        <div className="md:w-[40%] bg-white rounded-lg p-7 shadow-lg">
          <div className="flex flex-col mt-10">
            <h3 className="text-red-500 font-semibold mb-2 text-xl">
              TESTIMONIALS
            </h3>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              What people say about Us.
            </h2>
            <p className="text-gray-600 mb-8 text-xl">
              The advisors were knowledgeable and supportive throughout the
              process.
            </p>
          </div>
          <div className="relative h-52">
            <img
              src="/assets/testimonials.png"
              alt="Illustration"
              className="absolute bottom-0 right-0 h-auto"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 h-[45%] shadow-lg relative">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-20 h-20 rounded-full absolute -top-10 left-8"
            />
            <p className="text-gray-800 mt-8 mb-8">
              {testimonials[currentTestimonial].quote}
            </p>
            <h4 className="font-semibold text-red-500 text-xl">
              {testimonials[currentTestimonial].name}
            </h4>
            <p className="text-gray-600">
              {testimonials[currentTestimonial].location}
            </p>
          </div>

          <div className="flex justify-end mt-4 space-x-2 rotate-90">
            <button
              onClick={nextTestimonial}
              className="p-1 bg-white rounded-full shadow-md h-8 hover:bg-gray-100"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 19l-8-8 8-8"
                />
              </svg>
            </button>
            <button
              onClick={prevTestimonial}
              className="p-1 bg-white rounded-full shadow-md h-8 hover:bg-gray-100"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 19l8-8-8-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}