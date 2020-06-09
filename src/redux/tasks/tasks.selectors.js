import { createSelector } from 'reselect';

const selectTasks = (state) => state.tasks;
const selectUser = (state) => state.user;

export const selectCurrentUserTickets = createSelector(
	[selectTasks, selectUser],
	(tickets, user) =>
		tickets.allTickets.filter(
			(ticket) => ticket.createdBy === user.currentUser.userInfo._id
		)
);

export const selectAllTasks = createSelector(
	[selectTasks],
	(tasks) => tasks.tasks
);

export const selectFilteredTasks = createSelector(
	[selectTasks],
	(tasks) => tasks.tasks.filter((task) => task.status === 'New')
);

export const selectOneTask = (id) =>
	createSelector([selectTasks], ({ tasks }) => {
		const foundTask = tasks.find((task) => {
			return task._id === id;
		});
		return foundTask;
	});
