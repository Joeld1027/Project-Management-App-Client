import React, { useState } from 'react';
import { selectAllProjects } from '../../redux/projects/projects.selectors';
import { connect } from 'react-redux';
import { createTask } from '../../redux/tasks/tasks.actions';
import {
	Form,
	Grid,
	Segment,
	Button,
	Header,
	Radio,
	Select,
} from 'semantic-ui-react';

const options = [
	{ key: 'm', text: 'Bug/Fix', value: 'Bug/Fix' },
	{ key: 'f', text: 'Task', value: 'Task' },
	{ key: 'u', text: 'Update', value: 'Update' },
	{ key: 'h', text: 'Hardware', value: 'Hardware' },
	{ key: 's', text: 'Software', value: 'Software' },
];

function TaskForm({ createTask, allProjects, isLoading }) {
	const INITIAL_STATE = {
		name: '',
		description: '',
		category: '',
		priority: '',
		project: '',
	};
	const [formData, setformData] = useState(INITIAL_STATE);

	const handleChange = (e, { name, value }) =>
		setformData({ ...formData, [name]: value });

	const handleSubmit = async (event) => {
		event.preventDefault();
		createTask(formData)
			.then(() => {
				setformData(INITIAL_STATE);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const { priority, name, description, category, project } = formData;

	return (
		<div>
			<Header
				as='h1'
				content='CREATE TASK'
				textAlign='center'
				dividing
			/>
			<Form>
				<Grid>
					<Grid.Column width={7}>
						<Segment>
							<Form.Input
								onChange={handleChange}
								name='name'
								label='TASK NAME'
								value={name}
							/>
							<Form.TextArea
								onChange={handleChange}
								name='description'
								label='DESCRIPTIOM'
								value={description}
							/>
						</Segment>
					</Grid.Column>
					<Grid.Column width={8}>
						<Segment>
							<Form.Field>
								<label>CATEGORY</label>
								<Select
									value={category}
									name='category'
									options={options}
									placeholder='Category'
									onChange={handleChange}
								/>
							</Form.Field>
							<Form.Field>
								<label>ASSIGN TO PROJECT</label>
								<Select
									value={project}
									name='project'
									options={allProjects.map((project) => {
										return {
											key: project._id,
											text: project.name,
											value: project._id,
										};
									})}
									placeholder='-Select-'
									onChange={handleChange}
								/>
							</Form.Field>
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

							<Button
								loading={isLoading}
								attached='top'
								content='Submit Task'
								type='submit'
								color='teal'
								onClick={handleSubmit}
							/>
						</Segment>
					</Grid.Column>
				</Grid>
			</Form>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		allProjects: selectAllProjects(state),
		isLoading: state.tasks.isLoading,
	};
};

export default connect(mapStateToProps, { createTask })(TaskForm);
