import React, { Fragment } from 'react';
import UserState from '../../components/user/UserState';
import UserSearch from '../../components/user/UserSearch';
import Alert from '../../components/layout/Alert';

const Home = () => {
  return (
    <Fragment>
      <Alert />
      <UserSearch />
      <UserState />
    </Fragment>
  );
};

export default Home;
