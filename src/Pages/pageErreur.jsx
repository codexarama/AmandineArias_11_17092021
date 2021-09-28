import React, { Fragment } from 'react';
import Erreur404 from '../Components/Error';

/**
 * Render "Erreur" page
 * @extends Component
 * @returns {Reactnode} jsx in DOM html
 */

export default class Erreur extends React.Component {
  render() {
    return (
      <Fragment>
        <Erreur404 />
      </Fragment>
    );
  }
}
