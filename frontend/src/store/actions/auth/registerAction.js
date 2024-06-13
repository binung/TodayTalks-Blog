import actionTypes from '../../action-types/';
import { http } from '../../../helpers';
import { toast } from 'react-toastify';
export const registerWithJWT = (values, resetForm) => (dispatch) => {
    dispatch({ type: actionTypes.AUTH_LOADING, loading: true });
    http
        .post("/auth/register", {
            name: values.name,
            email: values.email,
            password: values.password,
            password_confirmation: values.passwordRetype
        })
        .then(response => {
            dispatch({ type: actionTypes.AUTH_LOADING, loading: false });
            toast.success(`Registration completed successfully`);
            resetForm();
        })
        .catch(err => {
            if (err.message) {
                toast.error(err.response.data[Object.keys(err.response.data)[0]][0]);
            }
            dispatch({ type: actionTypes.AUTH_LOADING, loading: false });
        })

}

export default registerWithJWT;