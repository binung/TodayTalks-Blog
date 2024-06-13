import actionTypes from '../../action-types/';
import { history } from '../../../helpers';
import { http } from '../../../helpers';
import { toast } from 'react-toastify';

export const loginWithJWT = (user) => (dispatch) => {
  dispatch({ type: actionTypes.AUTH_LOADING, loading: true });
  http
    .post("/auth/login", {
      email: user.email,
      password: user.password
    })
    .then(response => {
      dispatch({ type: actionTypes.AUTH_LOADING, loading: false });
      if (response.data) {
        dispatch({
          type: actionTypes.LOGIN_USER,
          currentUser: response.data.user,
          token: response.data.access_token
        })

        history.push("/")
      }
    })
    .catch(err => {
      toast.error(err.message);
      dispatch({ type: actionTypes.AUTH_LOADING, loading: false });
    })
}
