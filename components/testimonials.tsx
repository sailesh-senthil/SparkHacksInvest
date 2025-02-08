"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";

const testimonials = [
  {
    img: TestimonialImg01,
    name: "Sophia R.",
    content:
      "I was able to connect with investors who truly believed in my startup vision. The process was seamless, and I secured funding within weeks!",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg02,
    name: "James T.",
    content:
      "This platform made my investment research effortless. The insights and analytics helped me identify high-potential opportunities quickly.",
    categories: [1, 2, 4],
  },
  {
    img: TestimonialImg03,
    name: "Olivia M.",
    content:
      "My startup struggled to get noticed, but this platform changed everything. I connected with investors aligned with my mission and secured funding faster than expected!",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg04,
    name: "Daniel K.",
    content:
      "The data-driven recommendations allowed me to make confident investments. It’s now my go-to platform for discovering promising startups.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg05,
    name: "Eleanor V.",
    content:
      "I was struggling to raise capital, but the exposure I gained here helped me land multiple investors who saw the potential in my business.",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg06,
    name: "David B.",
    content:
      "I’ve made multiple investments using this platform, and every experience has been smooth. The transparency and insights are invaluable.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg07,
    name: "Lucy P.",
    content:
      "I was hesitant about investing in new industries, but the risk analysis tools gave me the confidence to diversify my portfolio effectively.",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg08,
    name: "Ryan S.",
    content:
      "As an investor, I’ve backed several startups that are now scaling rapidly thanks to the connections made through this platform.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg09,
    name: "Natalie J.",
    content:
      "I love how easy it is to find promising startups. The detailed reports and insights make it simple to evaluate opportunities.",
    categories: [1, 2],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="bg-gradient-to-r from-gray-200 to-indigo-300 bg-clip-text text-transparent text-4xl font-bold">
            What Investors & Founders Are Saying
          </h2>
          <p className="text-lg text-indigo-200/65 mt-4">
            Trusted by thousands of investors and startup founders worldwide, our platform is revolutionizing early-stage funding.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3" ref={masonryContainer}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <Testimonial testimonial={testimonial} category={category}>
                {testimonial.content}
              </Testimonial>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    name: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-gray-900 p-5 transition-opacity ${
        !testimonial.categories.includes(category) ? "opacity-30" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <Image className="inline-flex shrink-0 rounded-full" src={testimonial.img} width={36} height={36} alt={testimonial.name} />
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
