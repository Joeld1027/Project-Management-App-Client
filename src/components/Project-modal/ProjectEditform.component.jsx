import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
	Form,
	List,
	Image,
	Grid,
	Header,
	Checkbox,
} from 'semantic-ui-react';

export const ProjectEditForm = ({ theproject }) => {
	console.log(theproject);
	const [formData, setFormData] = useState({
		name: theproject.name,
		description: theproject.description,
		developers: [],
		priority: theproject.priority,
		deadline: '',
		tasks: [],
	});

	const {
		priority,
		name,
		description,
		deadline,
		tasks,
		developers,
	} = formData;
	const { assignedDevs, projectTickets } = theproject;

	const handleChange = (e, { name, value }) =>
		setFormData({ ...formData, [name]: value });

	const handleToggle = (e, { name, value }) => {
		let { [name]: array } = formData;
		if (!array.includes(value)) {
			array = [...array, value];
		} else {
			array = array.filter((a) => a !== value);
		}
		setFormData({ ...formData, [name]: array });
	};

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
			<Form.Field>
				<h4>DUE DATE:</h4>
				<DatePicker
					minDate={new Date()}
					selected={deadline}
					onChange={(date) =>
						setFormData({ ...formData, deadline: date })
					}
				/>
			</Form.Field>
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
						<Header
							content='Assigned Developers'
							textAlign='center'
						/>
						<List divided verticalAlign='middle' relaxed>
							{assignedDevs.map((dev) => (
								<List.Item key={dev._id}>
									<Image
										avatar
										src='https://react.semantic-ui.com/images/avatar/small/lena.png'
									/>
									<List.Content floated='right'>
										<Checkbox
											toggle
											checked={
												!developers.includes(dev._id) ? true : false
											}
											value={dev._id}
											name='developers'
											onChange={handleToggle}
										/>
									</List.Content>

									<List.Header>{dev.name}</List.Header>
									<List.Description>{`Working on ${dev.assignedProjects.length} projects`}</List.Description>
								</List.Item>
							))}
						</List>
					</Grid.Column>
					<Grid.Column width={8}>
						<Header content='Project Tasks' textAlign='center' />
						<List divided verticalAlign='middle'>
							{projectTickets.map((task) => (
								<List.Item key={task._id}>
									<List.Content floated='right'>
										<Checkbox
											toggle
											checked={
												!tasks.includes(task._id) ? true : false
											}
											value={task._id}
											name='tasks'
											onChange={handleToggle}
										/>
									</List.Content>
									<List.Header>{task.name}</List.Header>
									<List.Description>{`Priority: ${task.priority}`}</List.Description>
								</List.Item>
							))}
						</List>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Form>
	);
};
