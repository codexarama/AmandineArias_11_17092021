import React from 'react';
import Card from '../Components/Card';
import { logements } from '../Data/LogementsData';
import '../Styles/Annonces.css';

// export default class Annonces extends React.Component {
//   render() {
//     return (
//       <main className="annonces">
//         {logements.map(({ ...data }) => (
//           <article className="card" key={data.id}>
//             <Card id={data.id} title={data.title} src={data.cover} />
//           </article>
//         ))}
//       </main>
//     );
//   }
// }

export default class Annonces extends React.Component {
  render() {
    return (
      <main className="annonces">
        {logements.map(({ id, title, cover }) => (
          <article className="card" key={id}>
            <Card id={id} title={title} src={cover} />
          </article>
        ))}
      </main>
    );
  }
}
