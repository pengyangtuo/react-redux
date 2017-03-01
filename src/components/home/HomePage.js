import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <div className="jumbotron">
        <h1>Admin</h1>
        <p>React ...</p>
        <Link to="about" className="btn btn-primary btn-lg">About</Link>
      </div>
    );
  }
}

export default HomePage;