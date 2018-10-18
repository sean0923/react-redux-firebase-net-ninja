import React from 'react';
import _ from 'lodash';

const ProjectList = () => {
  return (
    <div>
      {_.range(3).map(idx => {
        return (
          <div key={idx} className="project-list section">
            <div className="card z-depth-0 proejct-summary">
              <div className="card-content grey-text text-darken-3">
                <span className="card-title">Project Title</span>
                <p>Posted by the Net Ninja</p>
                <p className="grey-text">17th October, 9pm</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
