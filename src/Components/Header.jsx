import React from 'react';
import Menu from './Menu';
import Banner from './Banner';
import '../Styles/Header.css'

/**
 * Render Header component
 * @extends Component
 * @returns {Reactnode} jsx in DOM html
 */

export default class Header extends React.Component {
  render() {
    return (
      <header>
        < Menu />
        < Banner />
      </header>
    );
  }
}
