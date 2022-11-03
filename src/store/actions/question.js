import axios from 'axios';
import { createAction } from '.';
import { actionType } from './type';

export const fetchQuestion = (dispatch) => {
  axios({
    method: 'GET',
    url: 'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions',
  })
    .then((res) => {
      dispatch(createAction(actionType.FETCH_QUESTION, res.data));
      //   console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
