import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
`;

export const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 480px;
	background: rgba(0, 0, 0, 0.6);
	padding: 65px;
	border-radius: 150px 5px;

	@media (max-width: 760px) {
		width: 380px;
	}

	span {
		color: white;
	}
`;

export const SignUpTitle = styled.h2`
	margin: 10px 0;
	color: white;
	font-size: 34px;
`;

export const LinkContainer = styled.div`
	margin-bottom: 30px;
`;
