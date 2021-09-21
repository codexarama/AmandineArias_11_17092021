import React from 'react';
import accueilBg from '../Images/accueilBanner.jpg';
// import aProposBg from '../Images/aProposBanner.jpg';

// FONCTIONNE MAIS N'AFFICHE RIEN
// const bannerBackground = {
//   width: "100%",
//   height: "150px",
//   backgroundImage: `url(${Background})`
// }

// FONTION : CHANGER IMAGE SELON url
// const bannerBackground = () => {
// // if path = / return (<section className="banner"><img src={accueilBg} alt="landscape"></img></section>)
// // if path = /apropos return (<section className="banner"><h1 className="banner-title">Chez vous, partout et ailleurs</h1><img src={aProposBg} alt="landscape"></img></section>)
// }

class Banner extends React.Component {
  render() {
    console.log(this);
    return (

      // {bannerBackground}

      <header className="banner">
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>

        {/* TEST : CHANGE TITRE PAGE "à propos" => OK ! */}
        {/* <h1 className="banner-title">{this.props.titre}</h1> */}

        {/* FONCTIONNE MAIS N'AFFICHE RIEN */}
        {/* <div style={Background}></div> */}

        {/* NE FONCTIONNE PAS */}
        {/* <div style={{ backgroundImage: `url(require("../Images/headerBanner.jpg"))` }}></div> */}

        {/* NE FONCTIONNE PAS */}
        {/* <bg-image className="banner"></bg-image> */}

        <img
          className="banner-background"
          // NE FONCTIONNE PAS : CHANGE SOURCE IMAGE (cf. captures écran)
          // src={this.props.src}
          src={accueilBg}
          alt="landscape"
        ></img>
      </header>
    );
  }
}
export default Banner;
