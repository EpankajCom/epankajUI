import './App.css';
import React from 'react';
import HelloMessage from './component/hello';
import Hero from './component/Heros';
import Footer from './component/footerlast';
import TestimonialSlider from './component/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Hero/>
      
        <h1>Welcome to Rajlee Innovations</h1>
        <HelloMessage />
        <TestimonialSlider/>
        <Footer/>
      </header>
    </div>
    
  );
}


export default App;
