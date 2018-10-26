import React from 'react';

const ProjectSummary = ({ projectObj }) => {
  const { title, content } = projectObj;
  return (
    // <div className="card z-depth-0 proejct-summary">
    <div className="card proejct-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>{content}</p>
        <p className="grey-text">17th October, 9pm</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
