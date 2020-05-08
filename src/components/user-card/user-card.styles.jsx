import styled from 'styled-components';

export const CardContainer = styled.div`
	width: 300px;
	height: 400px;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-self: center;
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 2;
	grid-row-end: 4;
	color: #fff;

	img {
		width: 100%;
		height: 60%;
		margin-bottom: 20px;
		z-index: 2;
		padding: 10px;
	}

	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: 20px;
		list-style: none;
		li {
			/* color: white; */
			margin: 10px 20px;
			font-size: 20px;
		}
	}
`;
