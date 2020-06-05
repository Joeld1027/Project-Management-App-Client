import React, { useState } from 'react';
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

const INITIAL_STATE = {
	name: '',
	description: '',
	developers: [],
	priority: '',
	deadline: '',
	tasks: [],
};

function ProjectForm({ users, createProject, user, tasks }) {
	const [formData, setformData] = useState(INITIAL_STATE);
	const [isLoading, setIsLoading] = useState(false);

	const userData = {
		labels: ['DEVELOPER', 'E-MAIL', 'ADD'],
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
		labels: ['TASK', 'CATEGORY', 'PRIORITY', 'DATE', 'ADD'],
		data: tasks,
		displayData: function (tickets = tasks) {
			return tickets.map((task) => {
				return (
					<Table.Row key={task._id} verticalAlign='top'>
						<Table.Cell>{task.name}</Table.Cell>
						<Table.Cell>{task.category || 'empty'}</Table.Cell>
						<Table.Cell>{task.priority || 'empty'}</Table.Cell>
						<Table.Cell>
							{new Date(task.createdDate).toLocaleDateString()}
						</Table.Cell>
						<Table.Cell>
							<Checkbox
								toggle
								value={task._id}
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
			.then((message) => {
				console.log(message);
				setformData(INITIAL_STATE);
			})
			.catch((err) => {
				console.log(err);
			});
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

	const { priority, name, description } = formData;
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
									label='PROJECT NAME'
									value={name}
								/>
								<Form.TextArea
									onChange={handleChange}
									name='description'
									label='DESCRIPTION'
									value={description}
								/>
							</Segment>
						</Grid.Column>
						<Grid.Column width={8}>
							<Segment>
								<Form.Field>
									<label>PRIORITY</label>
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
									<h4>DUE DATE:</h4>
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
									setsubheader='Add Developers to your project.'
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
