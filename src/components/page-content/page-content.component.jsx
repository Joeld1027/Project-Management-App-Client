import React from 'react';
import {
	Switch,
	Route,
	useRouteMatch,
	useLocation,
} from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import { ContentContainer } from './page-content.styles';

import Profile from '../profile/profile.component';
import ProjectPage from '../../pages/project-page/Project-page';
import DashboardPageContainer from '../../pages/dashboard-page/DashBoardContainer.component';
import TasksPage from '../../pages/tasks-pages/Tasks-page.component';
import UsersPage from '../../pages/users-page/users-page.component';
import PrivateRoute from '../privateRoute/private-route.component';

const PageContent = ({ currentUser, ...props }) => {
	let { path } = useRouteMatch();
	let { pathname } = useLocation();
	const { role } = currentUser.userInfo || {};
	let allowedRoles = [];
	switch (pathname) {
		case '/user/projects':
		case '/user/projects/:id':
			allowedRoles = ['Demo-Manager', 'Demo-Admin', 'Admin'];
			break;
		case '/user/roles':
			allowedRoles = ['Admin', 'Demo-Admin'];
			break;
		case '/user/dashboard':
			allowedRoles = [
				'Demo-Developer',
				'Demo-Manager',
				'Demo-Admin',
				'Admin',
			];
			break;
		default:
			allowedRoles = [
				'Demo-Developer',
				'Demo-Manager',
				'Demo-Admin',
				'Admin',
				'Demo-Submiter',
			];
			break;
	}

	return (
		<ContentContainer>
			<Switch>
				<Route exact path={`${path}`}>
					<Profile currentUser={currentUser} />
				</Route>

				<Route path={`${path}/tasks`}>
					<TasksPage />
				</Route>

				<PrivateRoute
					isAuthenticated={true}
					userRole={role}
					allowedRoles={allowedRoles}
				>
					<Route exact path={`${path}/dashboard`}>
						<DashboardPageContainer currentUser={currentUser} />
					</Route>
					<Route exact path={`${path}/roles`}>
						<UsersPage />
					</Route>
					<Route path={`${path}/projects`}>
						<ProjectPage currentUser={currentUser} />
					</Route>
				</PrivateRoute>
			</Switch>
			<Divider />
			<p>@ 2020 - Joel D. Infante</p>
		</ContentContainer>
	);
};

// <Route component={NoMatch} />
// const NoMatch = () => <h1>404 page not found</h1>;

export default PageContent;
