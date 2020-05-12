import React from 'react';
import { connect } from 'react-redux';
import SideMenu from '../side-menu/side-menu.component';
import PageContent from '../page-content/page-content.component';
import PrivateRoute from '../privateRoute/private-route.component';

const MainContent = ({ isAuthenticated, currentUser }) => {
	return (
		<div>
			<PrivateRoute isAuthenticated={isAuthenticated}>
				<SideMenu />
				<PageContent currentUser={currentUser} />
			</PrivateRoute>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated,
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, null)(MainContent);
