import './App.css';
import React from 'react';
import HelloMessage from './component/hello';
import Header from './component/nav';
// import './component/Navbar';git clr


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      {/* <Navbar/>   */}
        <h1>Welcome to Rajlee Innovations</h1>
        <HelloMessage />
      </header>
    </div>
  );
}


export default App;
