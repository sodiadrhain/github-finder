import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  const { login, avatar_url } = user;
  return (
    <Fragment>
      <div className="card text-center">
        <img src={avatar_url} alt={login} className="round-img" />
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </Fragment>
  );
};

export default UserItem;
