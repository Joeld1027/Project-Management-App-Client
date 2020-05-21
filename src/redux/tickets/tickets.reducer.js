import { TicketActionTypes } from './tickets.types';

const INITIAL_STATE = {
	allTickets: [],
};

const TicketsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TicketActionTypes.SET_ALL_TICKETS:
			return {
				...state,
				allTickets: action.payload,
			};
		case TicketActionTypes.TICKET_CREATED:
			return state;
		default:
			return state;
	}
};

export default TicketsReducer;
