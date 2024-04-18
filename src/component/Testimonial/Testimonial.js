import React, { useState, useEffect } from 'react';
import './Testimonial.css'; // You can define your own CSS styles in this file

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://example.com/john-doe.jpg',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://example.com/jane-smith.jpg',
    feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  // Add more testimonials here
];

const Testimonial = ({ testimonial }) => (
  <div className="testimonial-card">
    <img src={testimonial.image} alt={testimonial.name} />
    <h3>{testimonial.name}</h3>
    <p>{testimonial.feedback}</p>
  </div>
);

const TestimonialSlider = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container">
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={index === currentTestimonialIndex ? 'active' : ''}
          >
            <Testimonial testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
