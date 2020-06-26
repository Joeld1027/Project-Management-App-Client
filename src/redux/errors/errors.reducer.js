import { ErrorActionTypes } from './errors.types';

const INITIAL_STATE = {
	errorMessage: '',
};

const errorReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ErrorActionTypes.ERROR_MESSAGE:
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default errorReducer;
