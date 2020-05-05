import styled from 'styled-components';

export const DashboardContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	div {
		width: fit-content;
		display: flex;
		flex-direction: row;
		margin: 20px 20px;
		justify-content: space-around;
		div.ui {
			width: 150px;
			height: 150px;
			margin: 10px !important;
		}
	}
`;
