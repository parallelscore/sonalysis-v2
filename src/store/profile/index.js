import * as actions from './actionsTypes';

const defaultState = {
    data: [],
    loading: false,
};

const profileActions = (state = defaultState, action) => {
    switch (action.type) {
        case actions.GET_USER_PROFILE_REQUEST:
            return action.data;
        case actions.UPDATE_USER_PROFILE_REQUEST:
            return action.data;
        default:
            return state;
    }
};
export default profileActions