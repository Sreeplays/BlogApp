import { userActions } from "../reducer/userReducers";

export const userLogout= () => (dispatch) => {
    dispatch(userActions.reseUserInfo())
    localStorage.removeItem('account')
}