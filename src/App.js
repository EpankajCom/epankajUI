import './App.css';
import React from 'react';
import HelloMessage from './component/hello';
import Hero from './component/Heros';
import FooterLast from './component/footerlast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Hero/>
      
        <h1>Welcome to Rajlee Innovations</h1>
        <HelloMessage />
        <FooterLast/>
      </header>
    </div>
    
  );
}


export default App;
