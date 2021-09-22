import React from 'react';
import Card from '../Components/Card';
import { logements } from '../Data/LogementsData';
import '../Styles/Annonces.css';

class Annonces extends React.Component {
  render() {
    return (
      <main className="annonces">
        {logements.map(({ ...data }) => (
          <article className="card" key={data.id}>
            <Card id={data.id} title={data.title} src={data.cover} />
          </article>
        ))}
      </main>
    );
  }
}

// class Annonces extends React.Component {
//   render() {
//     return (
//       <main>
//         <ul className="annonces">
//           {logements.map(({ ...data }) => (
//             <li key={data.id}>
//               <Card id={data.id} title={data.title} src={data.cover} />
//             </li>
//           ))}
//         </ul>
//       </main>
//     );
//   }
// }

// STATELESS COMPONENT (FUNCTION)
// const Landing = () => {
// return (
//   <main className="landing">
//     <div>1</div>
//     <div>2</div>
//     <div>3</div>
//   </main>
// );
// };

export default Annonces;
