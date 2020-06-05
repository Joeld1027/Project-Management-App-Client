import React, { useState } from 'react';
import { Form, List, Image, Grid, Button } from 'semantic-ui-react';

export const ProjectEditForm = ({ theproject }) => {
	console.log(theproject);
	const [formData, setFormData] = useState({
		name: theproject.name,
		description: theproject.description,
		developers: [],
		priority: '',
		deadline: '',
		tasks: [],
	});

	const { priority, name, description, deadline } = formData;

	const handleChange = (e, { name, value }) =>
		setFormData({ ...formData, [name]: value });

	return (
		<Form>
			<Form.Group widths='equal'>
				<Form.Input value={name} name='name' label='PROJECT NAME' />
				<Form.TextArea
					value={description}
					name='description'
					label='DESCRIPTION'
				/>
			</Form.Group>
			<Form.Group inline>
				<label>Priority</label>
				<Form.Radio
					name='priority'
					label='Low'
					value='low'
					checked={priority === 'low'}
					onChange={handleChange}
				/>
				<Form.Radio
					name='priority'
					label='Medium'
					value='medium'
					checked={priority === 'medium'}
					onChange={handleChange}
				/>
				<Form.Radio
					name='priority'
					label='High'
					value='high'
					checked={priority === 'high'}
					onChange={handleChange}
				/>
			</Form.Group>

			<Grid>
				<Grid.Row divided>
					<Grid.Column width={8}>
						<List divided verticalAlign='middle'>
							<List.Item>
								<List.Content floated='right'>
									<Button basic icon='x' />
								</List.Content>
								<Image
									avatar
									src='https://react.semantic-ui.com/images/avatar/small/lena.png'
								/>
								<List.Content>Lena</List.Content>
							</List.Item>
						</List>
					</Grid.Column>
					<Grid.Column width={8}>
						<List divided verticalAlign='middle'>
							<List.Item>
								<List.Content floated='right'>
									<Button basic icon='x' />
								</List.Content>
								<Image
									avatar
									src='https://react.semantic-ui.com/images/avatar/small/lena.png'
								/>
								<List.Content>Lena</List.Content>
							</List.Item>
						</List>
					</Grid.Column>
				</Grid.Row>
			</Grid>

			<Form.Button color='instagram'>Submit</Form.Button>
		</Form>
	);
};
