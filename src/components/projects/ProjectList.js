import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

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

const mapStateToProps = state => ({
  projects: state.project.projects,
});

export default connect(mapStateToProps)(ProjectList);
