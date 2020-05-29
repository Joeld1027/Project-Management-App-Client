import React from 'react';
import { Segment, Loader } from 'semantic-ui-react';

export const ContentLoader = ({ active }) => {
	return (
		<div>
			<Segment size='huge' style={{ height: '600px' }}>
				<Loader
					size='large'
					active={active}
					inline='centered'
					style={{ marginTop: '200px' }}
					content='Loading...'
				/>
			</Segment>
		</div>
	);
};
