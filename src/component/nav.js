import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </header>
    );
  }
}

export default Header;
