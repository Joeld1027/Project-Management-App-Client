import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../header/header.component';
import SideMenu from '../side-menu/side-menu.component';
import PageContent from '../page-content/page-content.component';
import PrivateRoute from '../privateRoute/private-route.component';

const MainContent = ({ isAuthenticated }) => {
	return (
		<div>
			<PrivateRoute isAuthenticated={isAuthenticated}>
				<Header />
				<SideMenu />
				<PageContent />
			</PrivateRoute>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, null)(MainContent);
