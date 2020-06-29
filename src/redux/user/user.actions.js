import { UserActionTypes } from './user.types';
import { apiCall, setTokenHeader } from '../../services/apicall';

import { errorMessage } from '../errors/errors.actions';

export const setCurrentUser = (user) => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});

export const unSetCurrentUser = (user) => ({
	type: UserActionTypes.UNSET_CURRENT_USER,
	payload: user,
});

export const userLoading = () => ({
	type: UserActionTypes.USER_LOADING,
});

export const userLoaded = () => ({
	type: UserActionTypes.USER_LOADED,
});

export const getUsers = (users) => ({
	type: UserActionTypes.GET_ALL_USERS,
	payload: users,
});

export const updateOneUser = (updatedUser) => ({
	type: UserActionTypes.UPDATE_USER,
	payload: updatedUser,
});

export const getAllUsers = () => {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			return apiCall('get', `/api/users`)
				.then((users) => {
					dispatch(getUsers(users));
					resolve();
				})
				.catch((err) => {
					console.log(err);
					reject();
				});
		});
	};
};

export const updateUserInfo = (role) => {
	return (dispatch) => {
		dispatch(userLoading());
		return apiCall('put', `/api/users/${role.id}`, role)
			.then((updatedUser) =>
				dispatch(updateOneUser(updatedUser.editedUser))
			)
			.then(() => dispatch(userLoaded()))
			.catch((err) => console.log(err));
	};
};

export function setAuthorizationToken(accessToken) {
	setTokenHeader(accessToken);
}

export function logout() {
	return (dispatch) => {
		localStorage.clear();
		setAuthorizationToken(false);
		dispatch(unSetCurrentUser({}));
	};
}

export const authUser = (type, userData) => {
	return (dispatch) => {
		dispatch(userLoading());
		return apiCall('post', `/api/auth/${type}`, userData)
			.then((data) => {
				localStorage.setItem('jwToken', data.accessToken);
				setAuthorizationToken(data.accessToken);
				const userInfo = { userInfo: data.userInfo };
				dispatch(setCurrentUser(userInfo));
				dispatch(userLoaded());
			})
			.catch((err) => {
				dispatch(userLoaded());
				dispatch(errorMessage(err));
			});
	};
};
