import React from 'react';
import {
	OptionLink,
	OptionsContainer,
} from './side-menu-list.styles';

const MenuItems = () => (
	<OptionsContainer>
		<OptionLink to='/user/dashboard'>Dashboard Home</OptionLink>
		<OptionLink to='/user/roles'>Manage Roles</OptionLink>
		<OptionLink to='/user/managment'>Manage Project Users</OptionLink>
		<OptionLink to='/user/projects'>My Projects</OptionLink>
		<OptionLink to='/user/form'>My Tickets</OptionLink>
		<OptionLink to='/user/createticket'>Form page</OptionLink>
		<OptionLink to='/user'>Profile</OptionLink>
	</OptionsContainer>
);

export default MenuItems;
