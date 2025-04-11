import { countActions } from "../reducer/countReducers";

export const countActionsOnClick = (type) => (dispatch, getState) => {
    const {count} = getState();

    if(type === "INCREASE") {
        dispatch(countActions.countChange(count.number + 1))
    } else {
        dispatch(countActions.countChange(count.number - 1))
    }
}