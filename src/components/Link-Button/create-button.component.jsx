import React from 'react';

import { Link } from 'react-router-dom';
import { Header, Icon, Segment } from 'semantic-ui-react';

const LinkButton = ({ label, url, icon, typeAs, noSegment }) =>
	noSegment ? (
		<Link to={`${url}`}>
			<Header as={typeAs} color='teal'>
				<Icon name={icon} />
				<Header.Content>{label}</Header.Content>
			</Header>
		</Link>
	) : (
		<Segment compact>
			<Link to={`${url}`}>
				<Header as={typeAs} color='teal'>
					<Icon name={icon} />
					<Header.Content>{label}</Header.Content>
				</Header>
			</Link>
		</Segment>
	);

export default LinkButton;
