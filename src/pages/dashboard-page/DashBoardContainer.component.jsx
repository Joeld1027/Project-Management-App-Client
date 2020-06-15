import React from 'react';
import { connect } from 'react-redux';
import {
	selectAllTasksFromCurrentUserProjects,
	selectAllProjectsForCurrentUser,
} from '../../redux/projects/projects.selectors';
import Dashboard from './Dashboard-page.component';

const DashBoardPageContainer = ({
	currentUserProjectsTasks,
	currentProjects,
}) => {
	return (
		{
			(currentUserProjectsTasks && currentProjects) ?
			<Dashboard
				currentTasks={currentUserProjectsTasks}
				currentProjects={currentProjects}
			/> : <div>Loading....</div>
		}
	);
};

const mapStateToProps = (state) => {
	return {
		currentUserProjectsTasks: selectAllTasksFromCurrentUserProjects(
			state
		),
		currentProjects: selectAllProjectsForCurrentUser(state),
	};
};

export default connect(mapStateToProps)(DashBoardPageContainer);
