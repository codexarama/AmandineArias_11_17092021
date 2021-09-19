import React, { Fragment } from 'react';
import Banner from './Banner';
import Accordion from './Accordion';
import { AProposData } from '../Data/AProposData';
import Footer from './Footer';

class APropos extends React.Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <main>
          {AProposData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default APropos;

// import React, { Fragment } from 'react';
// import Banner from './Banner';
// import Accordion from './Accordion';
// import Footer from './Footer';

// class APropos extends React.Component {
//   render() {
//     return (
//       <Fragment>
//         <Banner />
//         <Accordion />
//         <Footer />
//       </Fragment>
//     );
//   }
// }

// export default APropos;
