import React, { Fragment } from 'react';
import { logements } from '../Data/LogementsData';
import User from '../Components/User';
import Footer from '../Components/Footer';

class Selection extends React.Component {
  render() {
    const urlId = this.props.match.params.id;
    const current = logements.find((data) => data.id === urlId);
    const { user } = current;

    return (
      <Fragment>
        <User name={user.name} src={user.picture} />
        <Footer />
      </Fragment>
    );
  }
}

export default Selection;
