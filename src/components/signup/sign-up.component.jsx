import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authUser } from '../../redux/user/user.actions';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
	SignUpContainer,
	SignUpTitle,
	LinkContainer,
} from './sign-up.styles';

const SignUp = ({ history, authUser }) => {
	const [userCredentials, setUserCredentials] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const {
		firstName,
		lastName,
		email,
		password,
		confirmPassword,
	} = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		const authType = 'signup';
		authUser(authType, userCredentials)
			.then(() => {
				history.push('/user');
			})
			.catch((err) => console.log(err));
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignUpContainer>
			<SignUpTitle>Register</SignUpTitle>
			<span>Sign up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='firstName'
					value={firstName}
					onChange={handleChange}
					label='First Name'
					required
				/>
				<FormInput
					type='text'
					name='lastName'
					value={lastName}
					onChange={handleChange}
					label='Last Name'
					required
				/>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label='Email'
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='Password'
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm Password'
					required
				/>
				<LinkContainer>
					<span>
						Already have an account? <Link to='/auth'>Sign In</Link>
					</span>
				</LinkContainer>
				<CustomButton type='submit'>SIGN UP</CustomButton>
			</form>
		</SignUpContainer>
	);
};

export default connect(null, { authUser })(SignUp);
