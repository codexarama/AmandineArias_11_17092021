import React from 'react';
import logoWhite from '../Images/logoWhite.svg';

/**
 * [Footer description]
 */

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <img className="footerLogo"  src={logoWhite} alt="logo"></img>
        <p className="footerContent">© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

// const Footer = () => {
//   return (
//     <footer>
//       <div className="footer">
//         <img src={logoWhite} alt="logo"></img>
//         <p>Chez vous, partout et ailleurs</p>
//       </div>
//     </footer>
//   );
// };

export default Footer;
