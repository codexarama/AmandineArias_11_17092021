import React from 'react';
import { Link } from 'react-router-dom';
// import { Link, NavLink } from 'react-router-dom';
import logo from '../Images/logo.svg';

// const activeLink = () => {
// 
// }

class Menu extends React.Component {
  render() {
    return (
      <nav>
        <img className="logo" src={logo} alt="logo"></img>
        <ul>
          <li>
            <Link className="nav-link" to="/">Accueil</Link>
          </li>
          <li>
            <Link className="nav-link" to="/apropos">A Propos</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
