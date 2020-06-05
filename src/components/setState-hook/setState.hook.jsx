import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTasks } from '../../redux/tasks/tasks.actions';
import { getAllProjects } from '../../redux/projects/projects.actions';
import { getAllUsers } from '../../redux/user/user.actions';

export const SetState = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchAll = async () => {
			Promise.all([
				dispatch(getAllProjects()),
				dispatch(getAllUsers()),
				dispatch(getAllTasks()),
			]).then(() => {
				console.log('Set State called');
			});
		};

		fetchAll();
	}, [dispatch]);
};
