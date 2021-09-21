import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Accueil from './pageAccueil';
import APropos from './pageAPropos';
import Logements from './pageLogements';
import Erreur from './pageErreur';
import '../App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter className="App">
        <Menu />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/apropos" component={APropos} />
          <Route path="/logements" component={Logements} />

          {/* PAGE NOT FOUND */}
          <Route component={Erreur} />
        </Switch>
      </BrowserRouter>
    );
  }
}

// function App() {
//   return (
//     <BrowserRouter className="App">
//       <Menu />
//       <Switch>
//         <Route exact path="/" component={Accueil} />
//         <Route path="/apropos" component={APropos} />
//         <Route path="/logements" component={Logements} />
//
//         {/* PAGE NOT FOUND */}
//         <Route component={Erreur} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

export default App;
