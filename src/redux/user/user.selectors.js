import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
	[selectUser],
	(user) => user.currentUser
);

export const selectCurrentUserInfo = createSelector(
	[selectUser],
	(user) => user.currentUser.userInfo
);

export const selectAllUsers = createSelector(
	[selectUser],
	(users) => users.allUsers
);

export const selectAllUsersNotInProject = (id) =>
	createSelector([selectUser], (users) => {
		let filteredUsers = users.allUsers.filter(
			(user) => !user.assignedProjects.includes(id)
		);
		return filteredUsers;
	});
