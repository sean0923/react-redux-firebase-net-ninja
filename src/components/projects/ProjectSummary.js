import React from 'react';

import { Link } from 'react-router-dom';
import moment from 'moment';

const ProjectSummary = ({ projectObj }) => {
  const { title, content, id, createdAt } = projectObj;
  return (
    <Link to={`/projects/${id}`}>
      <div className="card proejct-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{title}</span>
          <p>{content}</p>
          <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectSummary;
