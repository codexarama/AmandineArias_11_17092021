import React from 'react';
import logoWhite from '../Images/logoWhite.svg';
import '../Styles/Footer.css';

/**
 * Render Footer component
 * @extends Component
 * @returns {Reactnode} jsx in DOM html
 */

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
