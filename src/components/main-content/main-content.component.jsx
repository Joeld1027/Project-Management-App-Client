import React from 'react';
import { connect } from 'react-redux';

import { SetState } from '../setState-hook/setState.hook';
import SideMenu from '../side-menu/side-menu.component';
import PageContent from '../page-content/page-content.component';
import PrivateRoute from '../privateRoute/private-route.component';

const MainContent = ({ isAuthenticated, currentUser }) => {
	SetState();

	return (
		<div className='main-section'>
			<PrivateRoute isAuthenticated={isAuthenticated}>
				<SideMenu currentUser={currentUser} />
				<PageContent currentUser={currentUser} />
			</PrivateRoute>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated,
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(MainContent);
