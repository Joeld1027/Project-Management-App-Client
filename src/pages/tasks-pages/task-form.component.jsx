import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { selectAllProjects } from '../../redux/projects/projects.selectors';
import { selectCurrentUserInfo } from '../../redux/user/user.selectors';
import { connect, useDispatch } from 'react-redux';
import { setState } from '../../services/apicall';
import { createTask } from '../../redux/tasks/tasks.actions';
import {
	Form,
	Grid,
	Segment,
	Button,
	Header,
	Radio,
	Select,
	Label,
	Breadcrumb,
} from 'semantic-ui-react';

const options = [
	{ key: 'm', text: 'Bug/Fix', value: 'Bug/Fix' },
	{ key: 'f', text: 'Task', value: 'Task' },
	{ key: 'u', text: 'Update', value: 'Update' },
	{ key: 'h', text: 'Hardware', value: 'Hardware' },
	{ key: 's', text: 'Software', value: 'Software' },
];

function TaskForm({
	createTask,
	allProjects,
	isLoading,
	editData,
	currentUser,
}) {
	const INITIAL_STATE = {
		name: editData ? editData.name : '',
		createdBy: '' || currentUser.name,
		description: '' || (editData && editData.description),
		category: '' || (editData && editData.category),
		priority: '' || (editData && editData.priority),
		projectId: '',
		id: '' || (editData && editData._id),
	};
	const [formData, setformData] = useState(INITIAL_STATE);
	let history = useHistory();
	let dispatch = useDispatch();

	const handleChange = (e, { name, value }) =>
		setformData({ ...formData, [name]: value });

	const handleSubmit = async (event) => {
		event.preventDefault();
		createTask(formData)
			.then(() => {
				setformData(INITIAL_STATE);
				history.push('/user/tasks');
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const {
		priority,
		name,
		description,
		category,
		projectId,
		id,
	} = formData;

	const handleEdit = async () => {
		return await axios
			.patch(`api/tasks/${id}`, formData)
			.then(() => {
				setState(dispatch);
				console.log('task updated');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<Breadcrumb size='large' onClick={() => history.goBack()}>
				<Breadcrumb.Section link>
					<Breadcrumb.Divider icon='left arrow' /> Back
				</Breadcrumb.Section>
			</Breadcrumb>
			<Header
				as='h1'
				content={editData ? '' : 'CREATE TASK'}
				textAlign='center'
				dividing
			/>
			<Form>
				<Grid>
					<Grid.Column width={7}>
						<Segment color='teal'>
							<Form.Input
								onChange={handleChange}
								name='name'
								label='TASK NAME'
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
						<Segment color='teal'>
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
								<label>PROJECT:</label>
								{editData && editData.project ? (
									<Label basic color='teal'>
										{editData.project.name.toUpperCase()}
									</Label>
								) : (
									<Select
										value={projectId}
										name='projectId'
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
								)}
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

							{editData ? (
								<Button
									loading={isLoading}
									attached='top'
									content='Update Task'
									type='submit'
									color='teal'
									onClick={handleEdit}
								/>
							) : (
								<Button
									loading={isLoading}
									attached='top'
									content='Submit Task'
									type='submit'
									color='teal'
									onClick={handleSubmit}
								/>
							)}
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
		currentUser: selectCurrentUserInfo(state),
	};
};

export default connect(mapStateToProps, { createTask })(TaskForm);
