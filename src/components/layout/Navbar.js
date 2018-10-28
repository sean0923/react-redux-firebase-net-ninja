import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = ({ auth }) => {
  const { uid } = auth;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">
          MarioPlan
        </Link>

        {uid ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return { auth: state.firebase.auth };
};

export default connect(mapStateToProps)(Navbar);
