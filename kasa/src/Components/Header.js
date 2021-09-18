import React from 'react';
import logo from '../Images/logo.svg';
import Background from '../Images/headerBanner.jpg';

// FONCTIONNE MAIS N'AFFICHE RIEN
// const bannerBackground = {
//   width: "100%",
//   height: "150px",
//   backgroundImage: `url(${Background})`
// }

/**
 * [Header description]
 */

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <img className="logo" src={logo} alt="logo"></img>
          <ul className="nav-links">
            <li>Accueil</li>
            <li>A Propos</li>
          </ul>
        </nav>

        {/* FONCTIONNE MAIS N'AFFICHE RIEN */}
        {/* <div style={Background}></div> */}

        {/* NE FONCTIONNE PAS */}
        {/* <div style={{ backgroundImage: `url(require("../Images/headerBanner.jpg"))` }}></div> */}

        {/* NE FONCTIONNE PAS */}
        {/* <bg-image className="banner"></bg-image> */}

        <section className="banner">
          <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
          <img className="banner-background"src={Background} alt="landscape"></img>
        </section>
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
//       <section className="banner">
//         <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
//         <img className="banner-background"src={Background} alt="landscape"></img>
//       </section>
//     </header>
//   );
// };

export default Header;
