import axios from 'axios';

export const GET_USER = "GET_USER";
export const ADD_USER_LIKES = "ADD_USER_LIKES";

export const getUser = () => {
  return (dispatch) => {
    return axios.get('https://redux-app-crud-kotcherga.herokuapp.com/api/users').then((res) => {
      dispatch({ type: GET_USER, payload: res.data})
    })
    .catch((err) => console.log(err))
  };
};

export const addUserLike = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `https://redux-app-crud-kotcherga.herokuapp.com/api/users/${data.id}`,
      data: { ...data }
    })
    .then((res) => {
      dispatch({ type: ADD_USER_LIKES, payload: { ...data }})
    })
    .catch((err) => console.log(err))
  };
};
