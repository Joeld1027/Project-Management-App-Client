import React from 'react';
import { useLocation } from 'react-router-dom';

import { Message, Container } from 'semantic-ui-react';

const AlertMessage = ({ alert }) => {
	let location = useLocation();
	let yikes = location.state.from.pathname || {
		from: { pathname: '/' },
	};

	return (
		<Container fluid>
			<Message negative floating>
				<Message.Header>{alert}</Message.Header>
				<p>Redirected from {yikes}</p>
			</Message>
		</Container>
	);
};

export default AlertMessage;
