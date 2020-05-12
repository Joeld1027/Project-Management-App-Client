import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Profile from '../profile/profile.component';
import ProjectPage from '../../pages/project-page/Project-page';
import Dashboard from '../../pages/dashboard-page/Dashboard-page.component';

import { ContentContainer } from './page-content.styles';

const PageContent = ({ currentUser }) => {
	let { path } = useRouteMatch();
	return (
		<ContentContainer>
			<Switch>
				<Route
					exact
					path={`${path}/projects`}
					component={ProjectPage}
				/>
				<Route exact path={`${path}/dashboard`}>
					<Dashboard currentUser={currentUser} />
				</Route>
				<Route exact path={`${path}`}>
					<Profile currentUser={currentUser} />
				</Route>
			</Switch>
		</ContentContainer>
	);
};

// <Route component={NoMatch} />
// const NoMatch = () => <h1>404 page not found</h1>;

export default PageContent;
