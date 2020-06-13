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
		<Container>
			<ProfileContainer>
				<Header as='h2' icon floated='left'>
					<Icon name='settings' />
					Account Settings
					<Header.Subheader>
						Verify and update user information.
					</Header.Subheader>
				</Header>
				<Divider />
				<Segment raised padded color='black'>
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
							<List.Header>Role</List.Header>
							{role}
						</List.Item>
						<List.Item>
							<List.Header>User since</List.Header>
							{joined}
						</List.Item>
					</List>
				</Segment>
			</ProfileContainer>
		</Container>
	);
};

export default Profile;
