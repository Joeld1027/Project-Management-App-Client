import React from 'react';
import { ProfileContainer } from './profile.styles';
import {
	Header,
	Icon,
	List,
	Divider,
	Segment,
	Container,
} from 'semantic-ui-react';

const Profile = ({ currentUser }) => {
	const { name, email, userSince, role } = currentUser.userInfo;
	const joined = new Date(userSince).toDateString();
	return (
		<Container text>
			<Header as='h2' textAlign='center' icon>
				<Icon name='settings' />
				Account Settings
				<Header.Subheader>
					Verify and update user information.
				</Header.Subheader>
			</Header>
			<Divider />
			<ProfileContainer>
				<Segment
					raised
					padded='very'
					color='teal'
					style={{ minHeight: '300px' }}
					size='large'
				>
					<List size='large' divided relaxed className='profile-list'>
						<List.Item>
							<List.Content floated='right'>{name}</List.Content>
							<List.Header>Full Name</List.Header>
						</List.Item>
						<List.Item>
							<List.Content floated='right'>{email}</List.Content>

							<List.Header>Email</List.Header>
						</List.Item>
						<List.Item>
							<List.Content floated='right'>{role}</List.Content>
							<List.Header>Role</List.Header>
						</List.Item>
						<List.Item>
							<List.Content floated='right'> {joined}</List.Content>
							<List.Header>User since</List.Header>
						</List.Item>
					</List>
				</Segment>
			</ProfileContainer>
		</Container>
	);
};

export default Profile;
