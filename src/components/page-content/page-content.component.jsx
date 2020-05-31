import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Profile from '../profile/profile.component';
import ProjectPage from '../../pages/project-page/Project-page';
import Dashboard from '../../pages/dashboard-page/Dashboard-page.component';
import TicketsPage from '../../pages/tickets-page/Tickets-page.component';
import Ticket from '../ticket-form/ticket-form.component';

import { Divider } from 'semantic-ui-react';
import { ContentContainer } from './page-content.styles';
import UsersPage from '../../pages/users-page/users-page.component';
import ProjectDetails from '../../pages/project-page/project-details.component';
import { TicketDetails } from '../../pages/tickets-page/TicketDetails.component';

const PageContent = ({ currentUser, ...props }) => {
	let { path, url } = useRouteMatch();

	return (
		<ContentContainer>
			<Switch>
				<Route exact path={`${url}`}>
					<Profile currentUser={currentUser} />
				</Route>
				<Route exact path={`${url}/projects`}>
					<ProjectPage currentUser={currentUser} />
				</Route>
				<Route exact path={`${url}/dashboard`}>
					<Dashboard currentUser={currentUser} />
				</Route>
				<Route exact path={`${url}/tickets`}>
					<TicketsPage />
				</Route>
				<Route exact path={`${url}/roles`}>
					<UsersPage />
				</Route>

				<Route
					exact
					path={`${path}/tickets/new`}
					component={Ticket}
				/>
				<Route
					exact
					path={`${url}/projects/:id`}
					component={ProjectDetails}
				/>
				<Route
					exact
					path={`${url}/tickets/:id`}
					component={TicketDetails}
				/>
			</Switch>
			<Divider />
			<p>@ 2020 - Joel D. Infante</p>
		</ContentContainer>
	);
};

// <Route component={NoMatch} />
// const NoMatch = () => <h1>404 page not found</h1>;

export default PageContent;
