import React from 'react';
import { connect } from 'react-redux';

import { SetState } from '../setState-hook/setState.hook';
import SideMenu from '../side-menu/side-menu.component';
import PageContent from '../page-content/page-content.component';
import PrivateRoute from '../privateRoute/private-route.component';

const MainContent = ({ isAuthenticated, currentUser }) => {
	if (isAuthenticated) SetState();

	const { role } = currentUser.userInfo || {};
	const allowedRoles = [
		'Demo-Submitter',
		'Demo-Developer',
		'Demo-Manager',
		'Demo-Admin',
		'Admin',
	];
	return (
		<div className='main-section'>
			<PrivateRoute
				isAuthenticated={isAuthenticated}
				userRole={role}
				allowedRoles={allowedRoles}
			>
				<SideMenu currentUser={currentUser} />
				<PageContent
					isAuthenticated={isAuthenticated}
					currentUser={currentUser}
				/>
			</PrivateRoute>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated,
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(MainContent);
