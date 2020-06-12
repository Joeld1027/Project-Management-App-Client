import React from 'react';
import { Button, Comment, Form, Icon } from 'semantic-ui-react';

const Comments = ({
	taskComments,
	handleChange,
	handleSubmit,
	comment,
}) => {
	return (
		<Comment.Group>
			{taskComments.map((comment) => (
				<Comment key={comment._id}>
					<Comment.Content>
						<Comment.Author>
							<Icon color='teal' size='large' name='user' />
							{comment.author.name}
						</Comment.Author>
						<Comment.Metadata>
							<div>
								{new Date(comment.createdDate).toLocaleDateString()}
							</div>
						</Comment.Metadata>
						<Comment.Text>
							<p>{comment.comment}</p>
						</Comment.Text>
					</Comment.Content>
				</Comment>
			))}

			<Form reply onSubmit={handleSubmit}>
				<Form.TextArea
					value={comment.comment}
					onChange={handleChange}
					name='comment'
				/>
				<Button content='Add Comment' primary />
			</Form>
		</Comment.Group>
	);
};

export default Comments;
