import React, { Fragment } from 'react';
import { logout } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import {
	OptionLink,
	OptionsContainer,
} from './side-menu-list.styles';
import { List, Icon, Dropdown, Button } from 'semantic-ui-react';

const MenuItems = ({ currentUser, logout }) => {
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
		{
			key: 'sign-out',
			text: (
				<Button
					icon='sign-out'
					basic
					color='black'
					onClick={logout}
					content='Logout'
				/>
			),
		},
	];
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
				compact
				trigger={trigger}
				options={options}
				pointing='top left'
				icon={null}
			/>

			{role === 'Admin' ||
			role === 'Demo-Manager' ||
			role === 'Demo-Admin' ||
			role === 'Demo-Developer' ? (
				<Fragment>
					<OptionLink to='/user/dashboard'>Dashboard</OptionLink>
				</Fragment>
			) : null}

			{role === 'Admin' ||
			role === 'Demo-Manager' ||
			role === 'Demo-Admin' ? (
				<Fragment>
					<OptionLink to='/user/projects'>Projects</OptionLink>
				</Fragment>
			) : null}
			<OptionLink to='/user/tasks'>Tasks</OptionLink>
			{(role === 'Admin' || role === 'Demo-Admin') && (
				<OptionLink to='/user/roles'>Manage Users Roles</OptionLink>
			)}
		</OptionsContainer>
	);
};

export default connect(null, { logout })(MenuItems);
