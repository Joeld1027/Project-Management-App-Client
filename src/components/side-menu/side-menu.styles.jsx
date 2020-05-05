import styled from 'styled-components';

export const SideMenuContainer = styled.div`
	height: 100%;
	width: 240px;
	/* max-width: 260px; */
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background-color: #303e51;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: all 0.3s ease-in;
	/* @media screen and (min-width: 1600px) {
		width: 15%;
		transition: all 0.3s ease-in;
	}
	@media screen and (min-width: 2200px) {
		width: 10%;
		transition: all 0.3s ease-in;
	} */
`;

export const LogoContainer = styled.div`
	max-height: 100px;
	max-width: 200px;
	margin-bottom: 100px;
	img {
		width: 160px;
		height: 200px;
		object-fit: contain;
		box-sizing: border-box;
		opacity: 0.8;
	}
`;
