import React from 'react';
import {
	OptionLink,
	OptionsContainer,
} from './side-menu-list.styles';
import { List, Icon, Dropdown } from 'semantic-ui-react';

const options = [
	{
		key: 'user',
		text: (
			<OptionLink className='profile' to='/user'>
				Account
			</OptionLink>
		),
		icon: 'settings',
	},
	{ key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
];

const MenuItems = ({ currentUser }) => {
	const { name, role } = currentUser.userInfo;

	const trigger = (
		<span>
			<List selection verticalAlign='middle' size='big'>
				<List.Item>
					<Icon color='grey' name='user' size='large' />
					<List.Content>
						<List.Header className='username' as='a'>
							{name}
						</List.Header>
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
			{role === ('Admin' || 'Demo-Admin') && (
				<OptionLink to='/user/roles'>Manage Users</OptionLink>
			)}

			{role === ('Admin' || 'Demo-Manager' || 'Demo-Developer') && (
				<OptionLink to='/user/projects'>Projects</OptionLink>
			)}
			<OptionLink to='/user/tasks'>Tasks</OptionLink>
		</OptionsContainer>
	);
};

export default MenuItems;
