import { ErrorActionTypes } from './errors.types';

export const errorMessage = (err) => ({
	type: ErrorActionTypes.ERROR_MESSAGE,
	payload: err.message,
});

export const handleError = (error) => {
	return (dispatch) => dispatch(errorMessage(error));
};
