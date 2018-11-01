import React from 'react';

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

export default ProjectList;
