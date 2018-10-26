import React from 'react';

import { Link } from 'react-router-dom';

const ProjectSummary = ({ projectObj }) => {
  const { title, content, id } = projectObj;
  return (
    <Link to={`/projects/${id}`}>
      <div className="card proejct-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{title}</span>
          <p>{content}</p>
          <p className="grey-text">17th October, 9pm</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectSummary;
