import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';

const SignedInLinks = ({ signOut, profile }) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create-project">New Project</NavLink>
      </li>
      <li>
        <div onClick={signOut}>Log Out</div>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {profile.isLoaded && profile.initial}
        </NavLink>
      </li>
    </ul>
  );
};

export default connect(null, actions)(SignedInLinks);
