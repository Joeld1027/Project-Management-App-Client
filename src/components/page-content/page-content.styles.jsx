import styled from 'styled-components';

export const ContentContainer = styled.div`
	position: fixed;
	width: 80%;
	height: 90vh;
	padding: 10px;
	bottom: 0;
	right: 0;
	background-color: #f5f5f5;
	box-shadow: inset 7px 4px 9px rgba(0, 0, 0, 0.4);
	transition: all 0.3s ease-in;

	@media screen and (min-width: 1600px) {
		width: 85%;
		transition: all 0.3s ease-in;
	}
	@media screen and (min-width: 2200px) {
		transition: all 0.3s ease-in;
		width: 90%;
	}
`;
