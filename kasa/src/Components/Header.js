import React from 'react';
import logo from '../Images/logo.svg';
import banner from '../Images/banner.jpg';

/**
 * [Header description]
 */

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <img className="logo" src={logo} alt="logo"></img>
          <ul className="navLinks">
            <li>Accueil</li>
            <li>A Propos</li>
          </ul>
        </nav>
        <div className="banner">
          <div className="title">
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
          <img src={banner} alt="banner"></img>
        </div>
      </header>
    );
  }
}

// const Header = () => {
//   return (
//     <header>
//       <nav>
//         <img className="logo" src={logo} alt="logo"></img>
//         <ul className="navLinks">
//           <li>Accueil</li>
//           <li>A Propos</li>
//         </ul>
//       </nav>
//       <div className="banner">
//         <div className="title">
//           <h1>Chez vous, partout et ailleurs</h1>
//         </div>
//         <img src={banner} alt="banner"></img>
//       </div>
//     </header>
//   );
// };

export default Header;
