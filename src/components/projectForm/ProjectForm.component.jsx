import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import {
	Form,
	Header,
	Grid,
	Segment,
	Radio,
	Button,
	Label,
	Table,
	Checkbox,
} from 'semantic-ui-react';
import { createProject } from '../../redux/projects/projects.actions';
import { SearchAndTable } from '../search&table/search&table.component';
import { ContentLoader } from '../ContentLoader/ContentLoader.component';

function ProjectForm({ users, createProject, user }) {
	const [formData, setformData] = useState({
		name: '',
		description: '',
		developers: [],
		priority: '',
		deadline: '',
		createdBy: user._id,
		tasks: [],
	});

	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		const fetchTasks = () =>
			fetch(`http://localhost:5000/api/tickets/`)
				.then((fetchedTasks) => fetchedTasks.json())
				.then((fetchedTasks) => {
					let filteredTasks = fetchedTasks.tickets.filter(
						(task) => task.assignedProject.length < 1
					);
					setTasks(filteredTasks);
					setIsLoading(false);
					console.log(filteredTasks);
				})
				.catch((err) => console.log(err));

		fetchTasks();
	}, []);

	const userData = {
		labels: ['Developer', 'Email', 'Add'],
		data: users,
		displayData: function (usersData = users) {
			return usersData.map((user) => {
				return (
					<Table.Row key={user.id} verticalAlign='top'>
						<Table.Cell>{user.name}</Table.Cell>
						<Table.Cell>{user.email}</Table.Cell>
						<Table.Cell>
							<Checkbox
								toggle
								value={user.id}
								name='developers'
								onChange={handleToggle}
							/>
						</Table.Cell>
					</Table.Row>
				);
			});
		},
	};

	const taskData = {
		labels: ['Task', 'Category', 'Priority', 'Date', 'Add'],
		data: tasks,
		displayData: function (tickets = tasks) {
			return tickets.map((task) => {
				return (
					<Table.Row key={task.id} verticalAlign='top'>
						<Table.Cell>{task.name}</Table.Cell>
						<Table.Cell>{task.category || 'empty'}</Table.Cell>
						<Table.Cell>{task.priority || 'empty'}</Table.Cell>
						<Table.Cell>
							{new Date(task.createdDate).toLocaleDateString()}
						</Table.Cell>
						<Table.Cell>
							<Checkbox
								toggle
								value={task.id}
								name='tasks'
								onChange={handleToggle}
							/>
						</Table.Cell>
					</Table.Row>
				);
			});
		},
	};

	const handleChange = (e, { name, value }) =>
		setformData({ ...formData, [name]: value });

	const handleSubmit = async (event) => {
		event.preventDefault();
		createProject(formData)
			.then(() => console.log('Project created'))
			.catch((err) => {
				console.log(err);
			});
		console.log('called create project');
	};

	const handleToggle = (e, { name, value }) => {
		let { [name]: array } = formData;
		if (!array.includes(value)) {
			array = [...array, value];
		} else {
			array = array.filter((a) => a !== value);
		}
		setformData({ ...formData, [name]: array });
	};

	const { priority } = formData;
	return isLoading ? (
		<ContentLoader active={isLoading} />
	) : (
		<div>
			<Header
				as='h1'
				content='Create Project'
				textAlign='center'
				dividing
			/>

			<Form>
				<Grid>
					<Grid.Row>
						<Grid.Column width={7}>
							<Segment>
								<Form.Input
									onChange={handleChange}
									name='name'
									label='Project Name'
								/>
								<Form.TextArea
									onChange={handleChange}
									name='description'
									label='Description'
								/>
							</Segment>
						</Grid.Column>
						<Grid.Column width={8}>
							<Segment>
								<Form.Field>
									<label>Priority</label>
									<Radio
										label='Low'
										name='priority'
										value='low'
										checked={priority === 'low'}
										onChange={handleChange}
									/>
								</Form.Field>
								<Form.Field>
									<Radio
										label='Medium'
										name='priority'
										value='medium'
										checked={priority === 'medium'}
										onChange={handleChange}
									/>
								</Form.Field>
								<Form.Field>
									<Radio
										label='High'
										name='priority'
										value='high'
										checked={priority === 'high'}
										onChange={handleChange}
									/>
								</Form.Field>
								<Form.Field>
									<h4>Due Date:</h4>
									<Label
										basic
										color='teal'
										ribbon
										size='large'
										children={
											<DatePicker
												minDate={new Date()}
												selected={formData.deadline}
												onChange={(date) =>
													setformData({ ...formData, deadline: date })
												}
											/>
										}
									/>
								</Form.Field>

								<Button
									attached='bottom'
									content='Start Project'
									type='submit'
									color='teal'
									onClick={handleSubmit}
								/>
							</Segment>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={7}>
							<Segment>
								<SearchAndTable
									forDevs='very'
									striped={false}
									tableData={userData}
									setcontent='Available Devs'
									seticon='users'
									setsubheader='Add Developers to project.'
								/>
							</Segment>
						</Grid.Column>
						<Grid.Column width={9}>
							<SearchAndTable
								setcontent='Open Tasks'
								seticon={null}
								striped={true}
								tableData={taskData}
								setsubheader='List of tasks that have not been assigned'
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Form>
		</div>
	);
}

export default connect(null, { createProject })(ProjectForm);
