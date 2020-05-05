import styled from 'styled-components';

export const SignInContainer = styled.div`
	width: 470px;
	display: flex;
	flex-direction: column;
	margin-top: 50px;
	background: rgba(0, 0, 0, 0.6);
	padding: 65px;
	box-sizing: border-box;
	border-radius: 5px 150px;

	span {
		color: #fff;
		a {
			font-size: 18px;
		}
	}
`;

export const SignInTitle = styled.h2`
	margin: 10px 0;
	font-size: 34px;
	color: #fff;
`;

export const ButtonsBarContainer = styled.div`
	display: flex;
	margin-top: 20px;
	justify-content: space-between;
`;
