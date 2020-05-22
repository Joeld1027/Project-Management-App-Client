import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	Form,
	Header,
	Grid,
	Segment,
	Radio,
	Button,
} from 'semantic-ui-react';
import { createProject } from '../../redux/projects/projects.actions';
import SearchComponent from '../search-component/Search.component';

function ProjectForm({ users, createProject }) {
	const [formData, setformData] = useState({
		name: '',
		description: '',
		developers: [],
		priority: '',
	});

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

	const onToggle = (item) => {
		const { developers } = formData;
		let newArr = [];

		if (!developers.includes(item)) {
			newArr = [...developers, item];
		} else {
			newArr = developers.filter((a) => a !== item);
		}
		setformData({ ...formData, developers: newArr });
	};

	const { priority } = formData;
	return (
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

								<Button
									attached='top'
									content='Submit'
									type='submit'
									color='teal'
									onClick={handleSubmit}
								/>
							</Segment>
						</Grid.Column>
					</Grid.Row>
					<Grid.Column width={16}>
						<Segment>
							<SearchComponent
								users={users}
								onToggle={onToggle.bind(this)}
							/>
						</Segment>
					</Grid.Column>
				</Grid>
			</Form>
		</div>
	);
}

export default connect(null, { createProject })(ProjectForm);
