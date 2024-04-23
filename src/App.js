import './App.css';
import React from 'react';
import HelloMessage from './component/hello';
import Hero from './component/Heros';
import Footer from './component/footerlast';
import TestimonialSlider from './component/Testimonial/Testimonial';
import PaymentConfirmationPopup from './component/paymentPopup/Payment';
import Card from './component/welcome/welcome';
import SignUpForm from './component/Login/Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SignUpForm/>
      <Hero/>
      
        <h1>Welcome to Rajlee Innovations</h1>
        
        <HelloMessage />
        <TestimonialSlider/>
        <Footer/>
        <Card/>
        
      {/* <PaymentConfirmationPopup/> */}
      {/* <ProductCard/> */}
      </header>
    </div>
    
  );
}


export default App;
