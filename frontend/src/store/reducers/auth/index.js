import actionTypes from '../../action-types';
const initialState = {
    isLoggedIn: !!localStorage.getItem('token'),
    isAuthLoading: false,
    currentUser: null,
};

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.LOGIN_USER) {
        if (action.token) {
            localStorage.setItem('token', action.token);
        }  
        return {
            ...state,
            isLoggedIn: true,
            currentUser: action.currentUser
        };
    }

    if (action.type === actionTypes.LOGOUT_USER) {
        localStorage.removeItem('token');
        return {
            ...state,
            isLoggedIn: false,
            currentUser: null
        };
    }
    if (action.type === actionTypes.LOAD_USER) {
        return {
            ...state,
            currentUser: action.currentUser
        };
    }
    if (action.type === actionTypes.AUTH_LOADING) {
        return {
            ...state,
            isAuthLoading: action.loading
        };
    }
    return { ...state };
};

export default reducer;