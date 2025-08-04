import React from "react";
import TestimonialCard from "@/features/hero/testimonial-section/TestimonialCard";

const testimonials = [
  {
    name: "Mario Fan",
    username: "mariobrosfan",
    message:
      "Nintendo just brings back the joy of childhood! Playing with friends has never been this nostalgic yet so fun. Thank you, Nintendo!",
    avatarUrl: "/testimonial-section/mario.jpg",
  },
  {
    name: "Luigi Lover",
    username: "hyruler",
    message:
      "Breath of the Wild changed my gaming life forever. Nintendo, please keep making these magical experiences!",
    avatarUrl: "/testimonial-section/luigi.jpg",
  },
  {
    name: "IamYoshi",
    username: "switchguy",
    message:
      "The portability of Nintendo Switch is insane! I game on the go, and it`s smooth and fun.",
    avatarUrl: "/testimonial-section/yoshi.png",
  },
  // add more...
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-white px-4 py-16 text-red-700">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-4 text-3xl leading-tight font-extrabold md:text-4xl">
          What Our Customers Say!
        </h2>
        <p className="text-sm text-gray-600 md:text-base">
          Discover how Nintendo brings joy, connection, and unforgettable
          moments to players of all ages—straight from those who experience it
          every day. 🤩
        </p>
      </div>

      <div className="scrollbar-hide flex justify-center gap-6 overflow-x-auto px-4 md:px-0">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
