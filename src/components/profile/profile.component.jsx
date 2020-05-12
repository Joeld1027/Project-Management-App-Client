import React from 'react';
import { ProfileContainer } from './profile.styles';
import UserCard from '../user-card/user-card.component';
import { List } from 'semantic-ui-react';
import desk from '../../assets/desk.jpg';

const Profile = ({ currentUser }) => {
	const { firstName, email } = currentUser.userInfo;
	return (
		<ProfileContainer>
			<UserCard />
			<div className='top-img'>
				<img src={desk} alt='' />
			</div>
			<div className='bottom-div'></div>
			<div className='user-info'>
				<List inverted relaxed size={'big'}>
					<List.Item>
						<List.Header>First Name</List.Header>
						{firstName}
					</List.Item>
					<List.Item>
						<List.Header>Last Name</List.Header>
						Last name goes here
					</List.Item>
					<List.Item>
						<List.Header>Email</List.Header>
						{email}
					</List.Item>
					<List.Item>
						<List.Header>San Francisco</List.Header>
						What a lovely city
					</List.Item>
				</List>
			</div>
		</ProfileContainer>
	);
};

export default Profile;
