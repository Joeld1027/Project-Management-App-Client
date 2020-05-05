import styled from 'styled-components';

export const ProfileContainer = styled.section`
	display: grid;
	grid-template-columns: 30px 1fr 2fr 30px;
	grid-template-rows: 3fr 3fr 12fr;
	height: 100%;
	width: 100%;
	.top-img {
		grid-column-start: 1;
		grid-column-end: 5;
		grid-row-start: 1;
		grid-row-end: 3;
		width: 100%;
		height: 100%;
		img {
			border-radius: 10px 10px 0 0;
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

	.bottom-div {
		/* background-image: linear-gradient(
			to bottom right,
			rgba(40, 54, 66, 0.9),
			rgba(222, 38, 114, 0.9)
    ); */
		width: 100%;
		background-color: #303e51;
		border-radius: 0 0 10px 10px;
		grid-column-start: 1;
		grid-column-end: 5;
		grid-row-start: 3;
		grid-row-end: 3;
		z-index: -1;
	}

	.user-info {
		border-left: 1px solid #a7b1c2;
		height: 100%;
		grid-column-start: 3;
		grid-column-end: 5;
		grid-row-start: 3;
		grid-row-end: 3;
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #a7b1c2;
		ul {
			list-style: none;
			width: 80%;
			li {
				font-size: 22px;
				margin: 30px auto;
				border-bottom: 1px solid #2f4050;
			}
		}
	}
`;
