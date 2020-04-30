import React from 'react';
import { SideMenuContainer, LogoContainer } from './side-menu.styles';

import Logo from '../../assets/Logo3.png';
import MenuItems from '../side-menu-list/side-menu-list.component';

const SideMenu = () => (
	<SideMenuContainer>
		<LogoContainer>
			<img src={Logo} alt='Logo' />
		</LogoContainer>
		<MenuItems />
	</SideMenuContainer>
);

export default SideMenu;
