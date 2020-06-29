import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Header } from 'semantic-ui-react';
import { DemoLogin, DemoLoginContainer } from './SignInDemo.styles';
import { connect } from 'react-redux';

import { authUser } from '../../redux/user/user.actions';

const SignInDemo = ({ authUser }) => {
	const handleCards = (demoUser) => {
		const type = 'signin';
		let credentials = {
			email: `${demoUser}@email.com`,
			password: 'password',
		};
		authUser(type, credentials);
	};

	return (
		<DemoLoginContainer>
			<DemoLogin>
				<Header
					color='red'
					subheader='Try out the app with the demo accounts'
					inverted
					as='h1'
					content='Demo Login'
				/>

				<Card.Group stackable itemsPerRow={4}>
					<Card
						as='a'
						onClick={() => handleCards('Demo-Submitter')}
						description='Demo-Submitter'
						color='red'
						image='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png'
					/>
					<Card
						as='a'
						onClick={() => handleCards('Demo-Developer')}
						description='Demo-Developer'
						color='orange'
						image='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png'
					/>
					<Card
						as='a'
						onClick={() => handleCards('Demo-Manager')}
						description='Demo-Manager'
						color='yellow'
						image='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png'
					/>
					<Card
						as='a'
						onClick={() => handleCards('Demo-Admin')}
						description='Demo-Admin'
						color='olive'
						image='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png'
					/>
				</Card.Group>
				<Header inverted>
					Back to &nbsp; <Link to='/auth'>Sign In</Link>
					&nbsp; Or &nbsp; <Link to='/auth/signup'>Sign Up</Link>
				</Header>
			</DemoLogin>
		</DemoLoginContainer>
	);
};

export default connect(null, { authUser })(SignInDemo);
