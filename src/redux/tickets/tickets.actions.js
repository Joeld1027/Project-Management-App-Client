import { TicketActionTypes } from './tickets.types';
import { apiCall } from '../../services/apicall';

export const setAllTickets = (tickets) => ({
	type: TicketActionTypes.SET_ALL_TICKETS,
	payload: tickets,
});

export const ticketCreated = () => ({
	type: TicketActionTypes.TICKET_CREATED,
});

export const getAllTickets = () => {
	return async (dispatch) => {
		const tickets = await fetch(
			`http://localhost:5000/api/tickets`
		).then((tickets) => tickets.json());
		dispatch(setAllTickets(tickets));
	};
};

export const createTicket = (data) => {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			return apiCall(
				'post',
				'http://localhost:5000/api/tickets',
				data
			)
				.then(() => {
					dispatch(ticketCreated());
				})
				.then(() => resolve())
				.catch((err) => {
					console.log(err);
					reject();
				});
		});
	};
};
