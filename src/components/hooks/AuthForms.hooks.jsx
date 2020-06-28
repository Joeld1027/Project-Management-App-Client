import { useState } from 'react';
import { authUser } from '../../redux/user/user.actions';
import { useDispatch } from 'react-redux';

const AuthFormsHooks = (INITIAL_STATE) => {
	const dispatch = useDispatch();
	const [values, setValues] = useState(INITIAL_STATE, authUser);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const authType = 'signin';
		dispatch(authUser(authType, values));
	};

	const handleChange = (event) => {
		const { value, name } = event.target;

		setValues({ ...values, [name]: value });
	};

	return {
		handleSubmit,
		handleChange,
		values,
	};
};

export default AuthFormsHooks;
