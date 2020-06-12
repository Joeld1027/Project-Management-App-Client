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
} from 'semantic-ui-react';
import { createProject } from '../../redux/projects/projects.actions';
import { TaskTable } from '../taskTable/TaskTable.component';
import { ContentLoader } from '../ContentLoader/ContentLoader.component';
import { UserTable } from '../user-table/UserTable.component';

function ProjectForm({
	users,
	createProject,
	user,
	tasks,
	setActiveIndex,
}) {
	const [formData, setformData] = useState({
		name: '',
		description: '',
		addDevelopers: [],
		createdBy: user.name,
		priority: '',
		deadline: '',
		addTasks: [],
	});
	const [isLoading] = useState(false);

	const handleChange = (e, { name, value }) =>
		setformData({ ...formData, [name]: value });

	const handleSubmit = async (event) => {
		event.preventDefault();
		createProject(formData)
			.then(() => {
				console.log('Project Created');
				setActiveIndex(0);
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
				<Grid stackable>
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
							<UserTable
								ifchecked={formData}
								users={users}
								setcontent='Available Personnel'
								istoggle
								handleToggle={handleToggle}
								setsubheader='Add personnel to your project.'
							/>
						</Grid.Column>
						<Grid.Column width={9}>
							<TaskTable
								ifchecked={formData}
								setcontent='Open Tasks'
								usefor='projectForm'
								handleToggle={handleToggle}
								striped={true}
								allTasks={tasks}
								setsubheader='List of tasks that have not been assigned.'
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Form>
		</div>
	);
}

export default connect(null, { createProject })(ProjectForm);
