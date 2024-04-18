import React, { useState, useEffect } from 'react';
import './Testimonial.css'; // You can define your own CSS styles in this file

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg',
    feedback: 'At Rajlee Innovation Pvt Ltd, Ive had an exceptional experience engaging with their innovative educational technologies. The teams dedication to revolutionizing the learning landscape is evident in every aspect of their platform.Rajlee Innovation stands out for its commitment to providing accessible and high-quality education to learners of all backgrounds. Their intuitive platform offers a seamless learning experience, making complex concepts easy to grasp.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://www.shutterstock.com/image-photo/portrait-optimistic-nice-young-girl-260nw-2380585817.jpg',
    feedback: 'As a student using Rajlee Innovations platform Ive found my learning experience to be incredibly enriching. The interactive lessons and personalized guidance have empowered me to excel in my studies. I highly recommend Rajlee Innovation to fellow learners looking to achieve academic success."'
  },
  {
    id: 3,
    name: 'Ketty Perry',
    image: 'https://www.shutterstock.com/image-photo/photo-satisfied-charming-lovely-lady-260nw-2079814759.jpg',
    feedback: 'As an educator, Im always on the lookout for innovative tools to enhance my teaching methods. Rajlee Innovations platform has been a game-changer in my classroom. Its robust features and user-friendly interface have allowed me to create engaging lessons and track student progress effectively. Im grateful for the impact it has had on my teaching journey.'
  },
  {
    id: 4,
    name: 'Veer Singh',
    image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
    feedback: 'Rajlee Innovation has been a blessing for my childs education journey. The platforms comprehensive curriculum and interactive activities have made learning enjoyable and accessible. Ive witnessed a significant improvement in my childs academic performance and confidence since they started using Rajlee Innovation. Its reassuring to know that theyre receiving top-notch education from the comfort of our home'
  },
  {
    id: 1,
    name: 'Alt Whiteman',
    image: 'https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    feedback: 'Having worked in the education industry for years, I can confidently say that Rajlee Innovation is leading the charge in educational innovation. Their commitment to leveraging technology to enhance learning outcomes is commendable. Ive had the privilege of witnessing firsthand the positive impact Rajlee Innovations platform has had on learners of all ages. Their dedication to excellence sets them apart in the competitive EdTech landscape.'
  }
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
    }, 3000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container">
    <h3> Join the Rajlee Innovation Journey: See What Others Are Saying </h3>
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
