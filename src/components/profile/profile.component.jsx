import React from 'react';
import { ProfileContainer } from './profile.styles';
import UserCard from '../user-card/user-card.component';
import desk from '../../assets/desk.jpg';

const Profile = () => {
	return (
		<ProfileContainer>
			<UserCard />
			<div className='top-img'>
				<img src={desk} alt='' />
			</div>
			<div className='bottom-div'></div>
			<div className='user-info'>
				<ul>
					<li>name</li>
					<li>email</li>
					<li>position</li>
					<li>department</li>
					<li>phone number</li>
				</ul>
			</div>
		</ProfileContainer>
	);
};

export default Profile;