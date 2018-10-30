import React from 'react';
// import _ from 'lodash';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((projectObj, idx) => {
          return <ProjectSummary projectObj={projectObj} key={idx} />;
        })}
    </div>
  );
};

const mapStateToProps = state => {
  // console.log('state.firestore.ordered.projects: ', state.firestore.ordered.projects);
  return { projects: state.firestore.ordered.projects };
};

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'projects' }]))(
  ProjectList
);
