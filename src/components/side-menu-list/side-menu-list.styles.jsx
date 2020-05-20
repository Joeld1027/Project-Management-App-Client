import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const ListContainer = styled.ul`
// 	list-style: none;
// 	display: flex;
// `;

// export const ListItem = styled.li`
// 	font-size: 16px;
// 	color: #a7b1c2;
// 	margin: 20px 0;
// `;

export const OptionLink = styled(NavLink)`
	padding: 10px 15px;
	font-size: 16px;
	color: #a7b1c2;
	margin: 10px 0;
	cursor: pointer;
	text-decoration: none;
`;

export const OptionsContainer = styled.div`
	display: flex;
	flex-direction: column;

	.ui.list .list > .item a.header,
	.ui.list > .item a.header {
		color: #ff585c !important;
	}

	a.profile.active {
		background: none !important;
		color: black;
	}
	a:hover {
		color: #00ffff;
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 10px;
	}
	a.active {
		color: #00b6b6;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 10px;
	}

	@media screen and (max-width: 800px) {
		width: 80%;
	}
`;
