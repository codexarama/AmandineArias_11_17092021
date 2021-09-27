import React from 'react';
import Menu from './Menu';
import Banner from './Banner';
import '../Styles/Header.css'


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
