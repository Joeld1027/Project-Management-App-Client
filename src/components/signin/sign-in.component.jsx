import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import { Button } from 'semantic-ui-react';

import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer,
} from './sign-in.styles';
import AuthFormsHooks from '../hooks/AuthForms.hooks';

const SignIn = ({ errorMessage, isLoading }) => {
	const INITIAL_STATE = {
		email: '',
		password: '',
	};

	const { handleSubmit, handleChange, values } = AuthFormsHooks(
		INITIAL_STATE
	);
	const { email, password } = values;
	console.log(handleSubmit);

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
					<Button
						size='large'
						loading={isLoading}
						style={{ backgroundColor: '#1a443a', color: '#fff' }}
						type='submit'
					>
						{' '}
						Sign In{' '}
					</Button>
				</ButtonsBarContainer>
			</form>
			{errorMessage && (
				<div
					style={{
						color: 'red',
						marginTop: '1em',
						fontSize: '1.2em',
					}}
				>
					- {errorMessage} -- Try again -
				</div>
			)}
		</SignInContainer>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.user.isLoading,
	errorMessage: state.error.errorMessage,
});

export default connect(mapStateToProps)(SignIn);
