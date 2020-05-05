import React, { Component } from 'react';
import Header from '../header/header.component';
import SideMenu from '../side-menu/side-menu.component';
import PageContent from '../page-content/page-content.component';

export default class MainContent extends Component {
	render() {
		return (
			<div>
				<Header />
				<SideMenu />
				<PageContent />
			</div>
		);
	}
}
