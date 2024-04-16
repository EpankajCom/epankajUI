import './App.css';
import React from 'react';
import HelloMessage from './component/hello';
import Hero from './component/Heros';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Hero/>
        <h1>Welcome to Rajlee Innovations</h1>
        <HelloMessage />
      </header>
    </div>
  );
}


export default App;
