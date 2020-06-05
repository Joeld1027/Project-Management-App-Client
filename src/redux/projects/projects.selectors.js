import { createSelector } from 'reselect';

const selectProject = (state) => state.projects.projects;

export const selectOneProject = (id) =>
	createSelector([selectProject], (projects) => {
		return projects.filter((project) => project._id === id);
	});

export const selectAllProjects = createSelector(
	[selectProject],
	(projects) => projects
);
