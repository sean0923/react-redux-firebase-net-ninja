import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';

class Dashboard extends Component {
  render() {
    const { notifications, projects } = this.props;

    return (
      <div>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <ProjectList projects={projects} />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications notifications={notifications} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    notifications: state.firestore.ordered.notifications,
    projects: state.firestore.ordered.projects,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
  ])
)(Dashboard);
