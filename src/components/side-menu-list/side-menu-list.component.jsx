import React from 'react';
import {
	OptionLink,
	OptionsContainer,
} from './side-menu-list.styles';
import { List, Icon, Dropdown } from 'semantic-ui-react';

const options = [
	{
		key: 'user',
		text: <OptionLink to='/user'>Account</OptionLink>,
		icon: 'settings',
	},
	{ key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
];

const MenuItems = ({ currentUser }) => {
	const { firstName, role } = currentUser.userInfo;

	const trigger = (
		<span>
			<List selection verticalAlign='middle' size='big'>
				<List.Item>
					<Icon color='teal' name='user' size='large' />
					<List.Content>
						<List.Header as='a'>{firstName}</List.Header>
					</List.Content>
				</List.Item>
			</List>
		</span>
	);

	return (
		<OptionsContainer>
			<Dropdown
				trigger={trigger}
				options={options}
				pointing='top left'
				icon={null}
			/>
			<OptionLink to='/user/dashboard'>Dashboard</OptionLink>
			{role === 'Admin' ? (
				<OptionLink to='/user/roles'>Manage Users</OptionLink>
			) : null}
			{role === 'Admin' || role === 'Manager' ? (
				<OptionLink to='/user/managment'>Manage Projects</OptionLink>
			) : null}
			{role === 'Admin' ||
			role === 'Manager' ||
			role === 'Developer' ? (
				<OptionLink to='/user/projects'>Projects</OptionLink>
			) : null}
			<OptionLink to='/user/tickets'>Tickets</OptionLink>
		</OptionsContainer>
	);
};

export default MenuItems;
