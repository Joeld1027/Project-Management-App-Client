import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTicket } from '../../redux/tickets/tickets.actions';
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

function Ticket({ createTicket }) {
	const [formData, setformData] = useState({
		name: '',
		description: '',
		category: '',
		priority: '',
	});

	const handleChange = (e, { name, value }) =>
		setformData({ ...formData, [name]: value });

	const handleSubmit = async (event) => {
		event.preventDefault();
		createTicket(formData)
			.then(() => console.log('ticket created'))
			.catch((err) => {
				console.log(err);
			});
	};

	const { priority } = formData;

	return (
		<div style={{ height: '100vh', width: '100%' }}>
			<Header
				as='h1'
				content='Create Ticket'
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
								label='Ticket Name'
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
								<label>Category</label>
								<Select
									name='category'
									options={options}
									placeholder='Category'
									onChange={handleChange}
								/>
							</Form.Field>
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
				</Grid>
			</Form>
		</div>
	);
}

export default connect(null, { createTicket })(Ticket);
