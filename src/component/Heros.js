import React from 'react';

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
            <h1>Welcome to Rajlee Innovations PVT LTD</h1>
            <p>To build a global corporation new-generation Digital services provider offering AI Engineering and AI Operations services. We are process innovators focused on extracting the best out of the investments you have already made and enable "byte-size" Agile Transformation  renowned for its relentless focus on optimization, distinguished by its repertoire of inventive processes, enterprising staff, and cutting edge tools.</p>
          </div>
         </div>
          {/* Four Divs Inside One Div */}
          <div className="wrapper">
            <div className="box">Course 1</div>
            <div className="box">Course 2</div>
            <div className="box">Course 3</div>
            <div className="box">Course 4</div>
          </div>
        </div>
      // </div>
    );
  }
}

export default Hero;

