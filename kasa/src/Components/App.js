import React from 'react';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import '../App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Landing />
//       <Footer />
//     </div>
//   );
// }

export default App;
