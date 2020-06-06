import { createSelector } from 'reselect';

const selectProject = (state) => state.projects.projects;

export const selectOneProject = (id) =>
	createSelector([selectProject], (projects) => {
		const found = projects.find((project) => project._id === id);
		return found;
	});

export const selectAllProjects = createSelector(
	[selectProject],
	(projects) => projects
);
