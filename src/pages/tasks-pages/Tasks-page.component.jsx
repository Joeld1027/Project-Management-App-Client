import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import LinkButton from '../../components/create-button/create-button.component';

import { selectAllTasks } from '../../redux/tasks/tasks.selectors';
import { TaskTable } from '../../components/taskTable/TaskTable.component';
import { TaskDetails } from './TaskDetails.component';
import TaskForm from './task-form.component';

const TasksPage = ({ allTasks }, ...props) => {
	let { url, path } = useRouteMatch();
	return (
		<div>
			<Switch>
				<Route exact path={path}>
					<Container>
						<LinkButton
							label='Create Task'
							url={`${url}/new`}
							icon='plus'
							typeAs='h2'
						/>
						<Header
							as='h2'
							icon='wpforms'
							content='All Active Tasks'
							color='teal'
							textAlign='center'
						/>
						<TaskTable
							usefor='mainTable'
							allTasks={allTasks}
							url={url}
						/>
					</Container>
				</Route>
				<Route exact path={`${path}/new`}>
					<TaskForm />
				</Route>
				<Route exact path={`${path}/details/:id`}>
					<TaskDetails />
				</Route>
			</Switch>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		allTasks: selectAllTasks(state),
	};
};

export default connect(mapStateToProps)(TasksPage);
