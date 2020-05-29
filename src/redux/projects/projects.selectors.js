import { createSelector } from 'reselect';

const selectProject = (state) => state.projects.projects;

export const selectOneProject = (id) =>
	createSelector([selectProject], (projects) =>
		projects.filter((project) => project.id === id)
	);
