import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../header/header.component';
import SideMenu from '../side-menu/side-menu.component';
import PageContent from '../page-content/page-content.component';

const MainContent = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return (
			<div>
				<Header />
				<SideMenu />
				<PageContent />
			</div>
		);
	}
	return <Redirect to='/auth' />;
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, null)(MainContent);
