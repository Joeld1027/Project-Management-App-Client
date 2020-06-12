import React from 'react';
import { Button, Comment, Form, Icon } from 'semantic-ui-react';
import CommentEditModal from './commentModal.component';
import ConfirmCommentDelete from './confirmDeleteComment.component';

const Comments = ({
	handleDelete,
	handleEdit,
	currentUser,
	taskComments,
	handleChange,
	handleSubmit,
	comment,
	isLoading,
}) => {
	return (
		<Comment.Group>
			{taskComments.map((mapComment) => (
				<Comment key={mapComment._id}>
					<Comment.Content>
						<Comment.Author>
							<Icon color='teal' size='large' name='user' />
							{mapComment.author.name}
						</Comment.Author>
						<Comment.Metadata>
							<div>
								{new Date(
									mapComment.createdDate
								).toLocaleDateString()}
							</div>
						</Comment.Metadata>
						<Comment.Text>
							<p>{mapComment.comment}</p>
						</Comment.Text>
						{(currentUser.role === 'Demo-Admin' ||
							currentUser.role === 'Admin' ||
							currentUser._id === mapComment.author.id) && (
							<Comment.Actions>
								<Comment.Action>
									<CommentEditModal
										commentId={mapComment._id}
										handleChange={handleChange}
										handleEdit={handleEdit}
										comment={comment}
									/>
								</Comment.Action>
								<Comment.Action>
									<ConfirmCommentDelete
										handleDelete={handleDelete}
										commentId={mapComment._id}
									/>
								</Comment.Action>
							</Comment.Actions>
						)}
					</Comment.Content>
				</Comment>
			))}

			<Form loading={isLoading} reply onSubmit={handleSubmit}>
				<Form.TextArea
					value={comment.comment}
					onChange={handleChange}
					name='comment'
				/>
				<Button loading={isLoading} content='Add Comment' primary />
			</Form>
		</Comment.Group>
	);
};

export default Comments;
