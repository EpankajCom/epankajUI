import React from 'react';
import './payments.css';
import companyLogo from './rajlee1_logo.jpeg'; // Import your company logo image
import { FaTimes } from 'react-icons/fa';
const PaymentConfirmationPopup = () => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Thank You for Your Payment!</h2>
        <div id='cross'><a href=''><FaTimes/></a></div>
        <img id='image' src={companyLogo} alt="Company Logo"  /> 
        <p>We appreciate your trust in Rajlee Innovations Pvt Ltd.</p>
        <p>At Rajlee Innovations, we are dedicated to providing top-quality courses and guidance to students and working professionals alike.</p>
        <p>Feel free to explore our website for more information about our offerings.</p>
        <form className="login-form">
          <h3>Login to Your Account</h3>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
        <button onClick={() => window.close()}>Close</button>
      </div>
    </div>
  );
};

export default PaymentConfirmationPopup;

// // import React from 'react';
// // import companyLogo from '../companyLogo.png'; // Import your company logo image
//  // Import the cross icon from react-icons/fa

// const PaymentConfirmationPopup = () => {
//   return (
//     <div className="popup">
//       <div className="popup-inner">
//         <button className="close-btn" onClick={() => window.close()}><FaTimes /></button> {/* Cross icon button */}
//         <h2>Thank You for Your Payment!</h2>
//         <img src={companyLogo} alt="Company Logo" /> {/* Displaying the company logo */}
//         <p>We appreciate your trust in Rajlee Innovations Pvt Ltd.</p>
//         <p>At Rajlee Innovations, we are dedicated to providing top-quality courses and guidance to students and working professionals alike.</p>
//         <p>Feel free to explore our website for more information about our offerings.</p>
//         <form className="login-form">
//           <h3>Login to Your Account</h3>
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" name="username" required />
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" name="password" required />
//           <button type="submit">Login</button>
//         </form>
//         <button onClick={() => window.close()}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default PaymentConfirmationPopup;

