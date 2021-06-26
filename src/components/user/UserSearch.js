import React, { useState, useContext, Fragment } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const UserSearch = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (search === '') {
      alertContext.setAlert('Please enter a text', 'light');
    } else {
      githubContext.searchUsers(search);
    }
    e.target.search.value = '';
  };

  const onChange = (e) => setSearch(e.target.value);
  return (
    <Fragment>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Users..."
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 ? (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUser}
        >
          Clear-X
        </button>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default UserSearch;
