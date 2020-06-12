import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTaskComment } from '../../redux/tasks/tasks.actions';
import { selectCurrentUserInfo } from '../../redux/user/user.selectors';
import { selectCurrentTaskComments } from '../../redux/tasks/tasks.selectors';
import Comments from './Comments.component';

const CommentsContainer = ({
	currentUserId,
	taskId,
	taskComments,
	createTaskComment,
}) => {
	let { name, _id } = currentUserId || {};
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

	return (
		<Comments
			comment={comment}
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			taskComments={taskComments}
		/>
	);
};

const mapStateToProps = (state, { taskId }) => {
	return {
		currentUserId: selectCurrentUserInfo(state),
		taskComments: selectCurrentTaskComments(taskId)(state),
	};
};

export default connect(mapStateToProps, { createTaskComment })(
	CommentsContainer
);
