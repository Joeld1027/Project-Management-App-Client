import React from 'react';
import { CardContainer } from './user-card.styles';
import avatar from '../../assets/male.svg';

const UserCard = () => (
	<CardContainer>
		<img src={avatar} alt='' />
		<ul>
			<li>Name</li>
			<li>Email</li>
			<li>Position</li>
		</ul>
	</CardContainer>
);

export default UserCard;
