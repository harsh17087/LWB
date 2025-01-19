'use client'
import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/mocks/Testimonial';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Testimonial() {
  return (
    <div id="testimonials" className="p-8 mt-4 mb-4 rounded-3xl">
      <p className="text-3xl font-bold text-center mb-4">What Students Say</p>
      <p className="text-center text-lg mb-4">Hear from our students about their learning experience</p>
      <Carousel responsive={responsive}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-2">
            <TestimonialCard
              image={testimonial.image}
              studentName={testimonial.studentName}
              stream={testimonial.stream}
              studentClass={testimonial.studentClass}
              rating={testimonial.rating}
              city={testimonial.city}
              testimonial={testimonial.testimonial}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}