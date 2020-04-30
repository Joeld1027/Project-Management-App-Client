import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Profile from '../profile/profile.component';
import ProjectPage from '../../pages/project-page/Project-page';

import { ContentContainer } from './page-content.styles';

const PageContent = () => {
	return (
		<ContentContainer>
			<Switch>
				<Route exact path='/user' component={Profile} />
				<Route exact path='/user/projects' component={ProjectPage} />
			</Switch>
		</ContentContainer>
	);
};

// const NoMatch = () => <h1>404 page not found</h1>;

export default PageContent;
