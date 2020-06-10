import { createSelector } from 'reselect';

const selectTasks = (state) => state.tasks;

export const selectAllTasks = createSelector(
	[selectTasks],
	(tasks) => tasks.tasks
);

export const selectFilteredTasks = createSelector(
	[selectTasks],
	(tasks) => tasks.tasks.filter((task) => task.status === 'New')
);

export const selectOneTask = (id) =>
	createSelector([selectTasks], (tasks) => {
		const foundTask = tasks.tasks.find((task) => {
			return task._id === id;
		});
		return foundTask;
	});
