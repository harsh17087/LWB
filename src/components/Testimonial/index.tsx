import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/mocks/Testimonial';

export default function Testimonial() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          image={testimonial.image}
          studentName={testimonial.studentName}
          studentClass={testimonial.studentClass}
          city={testimonial.city}
          testimonial={testimonial.testimonial}
        />
      ))}
    </div>
  );
}