import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import Axios from 'axios';
import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  GET_REPOS,
  GET_USER,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search user
  const searchUsers = async (data) => {
    setLoading();
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${data}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };
  //Get User
  const getUser = async (username) => {
    setLoading();
    const res = await Axios.get(`https://api.github.com/users/${username}`);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };
  //Get Repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await Axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  const clearUser = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  const setLoading = () =>
    dispatch({
      type: SET_LOADING,
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        getUserRepos,
        clearUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
