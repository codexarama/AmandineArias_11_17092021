import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Images/logo.svg';
import '../Styles/Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <img className="logo" src={logo} alt="logo"></img>
        </Link>
        <ul>
          <NavLink className="nav-link" activeClassName="active" exact to="/">
            Accueil
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/apropos">
            A Propos
          </NavLink>
        </ul>
      </nav>
    );
  }
}

export default Menu;
