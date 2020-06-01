import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getAllTasks } from '../../redux/tasks/tasks.actions';
import { getAllProjects } from '../../redux/projects/projects.actions';
import { getAllUsers } from '../../redux/user/user.actions';
import SideMenu from '../side-menu/side-menu.component';
import PageContent from '../page-content/page-content.component';
import PrivateRoute from '../privateRoute/private-route.component';

const MainContent = ({ isAuthenticated, currentUser }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchAll = async () => {
			Promise.all([
				dispatch(getAllProjects()),
				dispatch(getAllUsers()),
				dispatch(getAllTasks()),
			]).then(() => console.log('all fetched'));
		};

		fetchAll();
	}, [dispatch]);

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
