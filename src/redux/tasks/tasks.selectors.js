import { createSelector } from 'reselect';

const selectTickets = (state) => state.tickets;
const selectUser = (state) => state.user;

export const selectCurrentUserTickets = createSelector(
	[selectTickets, selectUser],
	(tickets, user) =>
		tickets.allTickets.filter(
			(ticket) => ticket.createdBy === user.currentUser.userInfo._id
		)
);

export const selectAllTickets = createSelector(
	[selectTickets],
	(tickets) => tickets.allTickets
);
