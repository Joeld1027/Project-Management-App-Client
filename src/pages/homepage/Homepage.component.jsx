import React, { Component } from 'react';
import Header from '../../components/header/header.component';
import SideMenu from '../../components/side-menu/side-menu.component';
import PageContent from '../../components/page-content/page-content.component';

export default class Homepage extends Component {
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
