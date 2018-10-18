import React from 'react';
import _ from 'lodash';

import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
  return (
    <div className="project-list section">
      {_.range(4).map(idx => {
        return <ProjectSummary key={idx} />;
      })}
    </div>
  );
};

export default ProjectList;
