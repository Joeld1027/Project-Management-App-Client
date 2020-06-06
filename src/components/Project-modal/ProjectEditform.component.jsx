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
import InnerUserTableModal from './inner-userTableModal.component';

export const ProjectEditForm = ({
	theproject,
	setUpdateData,
	updateData,
	handleEdit,
}) => {
	const [formData, setFormData] = useState({
		name: theproject.name,
		description: theproject.description,
		priority: theproject.priority,
	});

	const { priority, name, description } = formData;
	const { assignedDevs, projectTickets } = theproject;

	const handleChange = (e, { name, value }) => {
		e.preventDefault();
		setFormData({ ...formData, [name]: value });
		setUpdateData({ ...updateData, [name]: value });
	};

	const handleToggle = (e, { name, value }) => {
		let { [name]: array } = updateData;
		if (!array.includes(value)) {
			array = [...array, value];
		} else {
			array = array.filter((a) => a !== value);
		}
		setUpdateData({ ...updateData, [name]: array });
	};

	return (
		<Form>
			<Form.Group widths='equal'>
				<Form.Input
					onChange={handleChange}
					value={name}
					name='name'
					label='PROJECT NAME'
				/>
				<Form.TextArea
					onChange={handleChange}
					value={description}
					name='description'
					label='DESCRIPTION'
				/>
			</Form.Group>
			<Form.Field>
				<h4>
					DUE DATE:{' '}
					{new Date(theproject.deadline).toLocaleDateString()}
				</h4>
				<DatePicker
					selected={updateData.deadline}
					placeholderText='--Change Due Date--'
					minDate={new Date()}
					onChange={(date) => {
						setUpdateData({ ...updateData, deadline: date });
					}}
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
						<Grid divided='vertically'>
							<Grid.Column width={2} verticalAlign='top'>
								<InnerUserTableModal
									handleEdit={handleEdit}
									setUpdateData={setUpdateData}
									updateData={updateData}
									handleToggle={handleToggle}
									projectId={theproject._id}
								/>
							</Grid.Column>
							<Grid.Column
								floated='left'
								width={5}
								verticalAlign='middle'
							>
								<Header as='h3' content='Add Developers' />
							</Grid.Column>
						</Grid>

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
												!updateData.developers.includes(dev._id)
													? true
													: false
											}
											value={dev._id}
											name='developers'
											onChange={handleToggle}
										/>
									</List.Content>

									<List.Header>{dev.name}</List.Header>
									<List.Description>{`Current projects ${dev.assignedProjects.length}`}</List.Description>
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
												!updateData.tasks.includes(task._id)
													? true
													: false
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
