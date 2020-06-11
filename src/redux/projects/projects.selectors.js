import { createSelector } from 'reselect';

const selectProject = (state) => state.projects.projects;
const selectCurrentUserId = (state) =>
	state.user.currentUser.userInfo._id;

export const selectOneProject = (id) =>
	createSelector([selectProject], (projects) => {
		const found = projects.find((project) => project._id === id);
		return found;
	});

export const selectAllProjects = createSelector(
	[selectProject],
	(projects) => projects
);

export const selectAllProjectsForCurrentUser = createSelector(
	[selectAllProjects, selectCurrentUserId],
	(projects, id) => {
		return projects.filter((project) =>
			project.assignedDevs.map((dev) => dev._id === id)
		);
	}
);

export const selectAllTasksFromCurrentUserProjects = createSelector(
	[selectAllProjectsForCurrentUser],
	(projects) => {
		let newArr = projects.reduce(
			(acc, project) => acc.concat(project.projectTasks),
			[]
		);
		return newArr;
	}
);
