import React from 'react';
import logoWhite from '../Images/logoWhite.svg';
import '../Styles/Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <img className="footer-logo" src={logoWhite} alt="logo"></img>
        <p className="footer-content">© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

// STATELESS COMPONENT (FONCTION)
// const Footer = () => {
//   return (
//     <footer className="footer">
//         <img className="footer-logo" src={logoWhite} alt="logo"></img>
//         <p className="footer-content">Chez vous, partout et ailleurs</p>
//     </footer>
//   );
// };
