import styled from 'styled-components';

export const DemoLogin = styled.div`
	width: 600px;
	display: flex;
	flex-direction: column;

	background: rgba(0, 0, 0, 0.6);
	padding: 70px;
	border-radius: 5px 150px;
	@media (max-width: 760px) {
		width: 320px;
		padding: 70px;
	}
`;

export const DemoLoginContainer = styled.div`
	height: 100vh;
	box-sizing: content-box;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 760px) {
		height: 100%;
	}
`;
