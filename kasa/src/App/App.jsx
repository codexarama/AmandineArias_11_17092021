import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from '../Components/Menu';
import Accueil from '../Pages/pageAccueil';
import APropos from '../Pages/pageAPropos';
import Selection from '../Pages/pageSelection';
import Erreur from '../Pages/pageErreur';
import Footer from '../Components/Footer';
import '../Styles/App.css';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter className="App">
        <Menu />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/apropos" component={APropos} />
          <Route path="/selection/:id" render={(props) => <Selection {...props} /> } />

          {/* PAGE NOT FOUND */}
          <Route component={Erreur} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}