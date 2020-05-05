import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
	isAuthenticated: false,
	currentUser: {},
	isLoading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.USER_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !!Object.keys(action.payload).length,
				currentUser: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default userReducer;
