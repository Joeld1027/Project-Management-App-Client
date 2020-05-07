import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authUser } from '../../redux/user/user.actions';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer,
} from './sign-in.styles';

const SignIn = ({ history, authUser }) => {
	const [userCredentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const { email, password } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();
		const authType = 'signin';
		authUser(authType, userCredentials)
			.then(() => {
				history.push('/user');
			})
			.catch((err) => console.log(err));
	};

	const handleChange = (event) => {
		const { value, name } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<SignInTitle>Welcome</SignInTitle>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					handleChange={handleChange}
					value={email}
					label='Email'
					required
				/>
				<FormInput
					name='password'
					type='password'
					value={password}
					handleChange={handleChange}
					label='Password'
					required
				/>
				<span>
					Don't have an account?{' '}
					<Link to='/auth/signup'>Sign Up</Link>
				</span>
				<ButtonsBarContainer>
					<CustomButton type='submit'> Sign in </CustomButton>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	);
};

export default connect(null, { authUser })(SignIn);
