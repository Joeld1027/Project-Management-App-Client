import React, { useState, Fragment } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
	Form,
	Image,
	Grid,
	Header,
	Checkbox,
	Table,
} from 'semantic-ui-react';
import InnerUserTableModal from './inner-userTableModal.component';
import InnerTaskTableModal from './inner-tasksTable.component';

export const ProjectEditForm = ({
	theproject,
	setUpdateData,
	updateData,
}) => {
	const [formData, setFormData] = useState({
		name: theproject.name,
		description: theproject.description,
		priority: theproject.priority,
	});

	const { priority, name, description } = formData;
	const { assignedDevs, projectTasks } = theproject;

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

	const labels = ['Employee', 'Email', 'Projects', 'Add'];
	const taskLabels = ['Name', 'Priority', 'Category', 'Add'];

	return (
		<Fragment>
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
				<Form.Group inline>
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
					<Form.Field>
						<label>PRIORITY</label>
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
					</Form.Field>
				</Form.Group>
			</Form>

			<Grid padded stackable>
				<Grid.Row divided stretched>
					<Grid.Column width={8}>
						<Header
							as='h2'
							content='Assigned Personnel'
							textAlign='center'
						/>

						<Table basic='very' celled collapsing size='large'>
							<Table.Header>
								<Table.Row>
									{labels.map((label) => (
										<Table.HeaderCell key={label}>
											{label}
										</Table.HeaderCell>
									))}
								</Table.Row>
							</Table.Header>

							<Table.Body>
								{assignedDevs.map((dev) => (
									<Table.Row key={dev._id}>
										<Table.Cell>
											<Header as='h4' image>
												<Image
													src='https://react.semantic-ui.com/images/avatar/small/lena.png'
													rounded
													size='mini'
												/>
												<Header.Content>
													{dev.name}
													<Header.Subheader>
														{dev.role}
													</Header.Subheader>
												</Header.Content>
											</Header>
										</Table.Cell>
										<Table.Cell>{dev.email}</Table.Cell>
										<Table.Cell>
											{dev.assignedProjects.length}
										</Table.Cell>
										<Table.Cell>
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
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table>
					</Grid.Column>

					<Grid.Column width={8}>
						<Header
							as='h2'
							content='Project Tasks'
							textAlign='center'
						/>

						<Table color='black' celled collapsing size='large'>
							<Table.Header>
								<Table.Row>
									{taskLabels.map((label) => (
										<Table.HeaderCell key={label}>
											{label}
										</Table.HeaderCell>
									))}
								</Table.Row>
							</Table.Header>

							<Table.Body>
								{projectTasks.map((task) => (
									<Table.Row key={task._id}>
										<Table.Cell>{task.name}</Table.Cell>
										<Table.Cell>{task.priority}</Table.Cell>
										<Table.Cell>{task.category}</Table.Cell>
										<Table.Cell>
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
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column width={8}>
						<InnerUserTableModal
							handleToggle={handleToggle}
							setUpdateData={setUpdateData}
							updateData={updateData}
							projectId={theproject._id}
						/>
					</Grid.Column>
					<Grid.Column width={8}>
						<InnerTaskTableModal
							setUpdateData={setUpdateData}
							updateData={updateData}
							projectId={theproject._id}
							handleToggle={handleToggle}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Fragment>
	);
};
