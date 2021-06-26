import React from 'react';

const ReposItem = ({ repo }) => {
  return (
    <div className="card">
      <strong>
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
      </strong>
      <p>{repo.description}</p>
    </div>
  );
};

export default ReposItem;
