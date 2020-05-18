import React from 'react';
import { SideMenuContainer, LogoContainer } from './side-menu.styles';

import Logo from '../../assets/Logo3.png';
import MenuItems from '../side-menu-list/side-menu-list.component';

const SideMenu = ({ currentUser }) => (
	<SideMenuContainer>
		<LogoContainer>
			<img src={Logo} alt='Logo' />
		</LogoContainer>
		<MenuItems currentUser={currentUser} />
	</SideMenuContainer>
);

export default SideMenu;
