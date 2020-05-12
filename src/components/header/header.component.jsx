import React from 'react';
import { HeaderContainer, LinkContainer } from './header.styles';
import { Header, Image } from 'semantic-ui-react';

const MainHeader = ({ currentUser }) => {
	const { firstName } = currentUser.userInfo;
	return (
		<HeaderContainer>
			<Header as='h2'>
				<Image
					circular
					src='https://react.semantic-ui.com/images/avatar/large/patrick.png'
				/>
				{firstName}
			</Header>

			<LinkContainer>
				<li>link</li>
				<li>link</li>
				<li>link</li>
			</LinkContainer>
		</HeaderContainer>
	);
};

export default MainHeader;
