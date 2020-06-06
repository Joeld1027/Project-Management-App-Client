import React from 'react';
import { ProfileContainer } from './profile.styles';
import {
	Header,
	Icon,
	List,
	Divider,
	Segment,
} from 'semantic-ui-react';

const Profile = ({ currentUser }) => {
	console.log(currentUser);
	const { name, email, userSince } = currentUser.userInfo;
	const joined = new Date(userSince).toDateString();
	return (
		<ProfileContainer>
			<Header as='h2' icon floated='left'>
				<Icon name='settings' />
				Account Settings
				<Header.Subheader>
					Verify and update user information.
				</Header.Subheader>
			</Header>
			<Divider />
			<Segment stacked padded color='black'>
				<List size='large' divided relaxed>
					<List.Item>
						<List.Header>Full Name</List.Header>
						{name}
					</List.Item>
					<List.Item>
						<List.Header>Email</List.Header>
						{email}
					</List.Item>
					<List.Item>
						<List.Header>Position</List.Header>
						User
					</List.Item>
					<List.Item>
						<List.Header>User since</List.Header>
						{joined}
					</List.Item>
				</List>
			</Segment>
		</ProfileContainer>
	);
};

export default Profile;
