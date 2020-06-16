import { UserActionTypes } from './user.types';
import { updateUser } from './usersUtils';

const INITIAL_STATE = {
	isAuthenticated: false,
	currentUser: {},
	isLoading: false,
	allUsers: [],
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
				isAuthenticated: true,
				currentUser: action.payload,
				isLoading: false,
			};
		case UserActionTypes.UNSET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
				isAuthenticated: false,
			};
		case UserActionTypes.GET_ALL_USERS:
			return {
				...state,
				allUsers: action.payload,
			};
		case UserActionTypes.UPDATE_USER:
			return {
				...state,
				allUsers: updateUser(state.allUsers, action.payload),
			};
		case UserActionTypes.USER_LOADED:
			return {
				...state,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default userReducer;
