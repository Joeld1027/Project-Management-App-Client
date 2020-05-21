import React from 'react';

import { Link } from 'react-router-dom';
import { Header, Icon, Segment } from 'semantic-ui-react';

function CreateButton({ label, url }) {
	return (
		<Segment compact>
			<Link to={`${url}/new`}>
				<Header as='h3' color='teal'>
					<Icon name='plus' />
					<Header.Content>Create {label}</Header.Content>
				</Header>
			</Link>
		</Segment>
	);
}

export default CreateButton;
