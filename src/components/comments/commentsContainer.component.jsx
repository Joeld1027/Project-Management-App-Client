import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	createTaskComment,
	updateComment,
	deleteComment,
} from '../../redux/tasks/tasks.actions';
import { selectCurrentUserInfo } from '../../redux/user/user.selectors';
import { selectCurrentTaskComments } from '../../redux/tasks/tasks.selectors';
import Comments from './Comments.component';

const CommentsContainer = ({
	deleteComment,
	updateComment,
	currentUser,
	taskId,
	taskComments,
	createTaskComment,
	isLoading,
}) => {
	let { name, _id } = currentUser || {};
	let INITIAL_STATE = {
		comment: '',
		author: {
			name: name,
			id: _id,
		},
		taskId: taskId,
	};
	const [comment, setComment] = useState(INITIAL_STATE);

	const handleChange = (e, { name, value }) =>
		setComment({ ...comment, [name]: value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createTaskComment(comment, taskId);
		setComment(INITIAL_STATE);
	};

	const handleEdit = async (commentId) => {
		await updateComment(commentId, comment, taskId);
		setComment({ comment: '' });
	};

	const handleDelete = (commentId) => {
		deleteComment(commentId, taskId);
	};

	return (
		<Comments
			handleDelete={handleDelete}
			handleEdit={handleEdit}
			currentUser={currentUser}
			isLoading={isLoading}
			comment={comment}
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			taskComments={taskComments}
		/>
	);
};

const mapStateToProps = (state, { taskId }) => {
	return {
		currentUser: selectCurrentUserInfo(state),
		taskComments: selectCurrentTaskComments(taskId)(state),
		isLoading: state.tasks.isLoading,
	};
};

export default connect(mapStateToProps, {
	createTaskComment,
	updateComment,
	deleteComment,
})(CommentsContainer);
