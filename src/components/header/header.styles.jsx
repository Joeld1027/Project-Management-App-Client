import styled from 'styled-components';

export const HeaderContainer = styled.div`
	height: 10vh;
	width: auto;
	position: relative;
	border-bottom: solid 1px black;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 240px;
	padding: 0 10px;
	transition: all 0.3s ease-in;
	background-color: #f5f6f7;
	/* @media screen and (min-width: 1600px) {
		width: 85%;
		transition: all 0.3s ease-in;
	}
	@media screen and (min-width: 2200px) {
		transition: all 0.3s ease-in;
		width: 90%;
	} */
`;

export const LinkContainer = styled.div`
	display: flex;
	list-style: none;
	justify-content: space-around;
	width: 30%;
`;
