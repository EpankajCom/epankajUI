import React from 'react';
import './App.css'; // Import your CSS file for styling

class Hero extends React.Component {
  render() {
    return (
      <div>
        {/* Navigation Bar */}
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="hero">
          <div className="content">
            <h1>Welcome to Our Website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Four Divs Inside One Div */}
          <div className="wrapper">
            <div className="box">Box 1</div>
            <div className="box">Box 2</div>
            <div className="box">Box 3</div>
            <div className="box">Box 4</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

