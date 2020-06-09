export const updateUser = (allUsers, updatedUser) => {
	let userIndex = allUsers.findIndex(
		(user) => user._id === updatedUser._id
	);
	allUsers[userIndex] = updatedUser;
	return allUsers;
};
