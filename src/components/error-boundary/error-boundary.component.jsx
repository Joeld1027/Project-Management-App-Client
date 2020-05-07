import React, { Component } from 'react';
import {
	ErrorImageContainer,
	ErrorImageText,
	ErrorImageOverlay,
} from './error-boundary.styles';

import { Header } from 'semantic-ui-react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasErrored: false,
		};
	}

	static getDerivedStateFromError(error) {
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png' />
					<ErrorImageText>
						<Header size='huge'>Error 404</Header>
					</ErrorImageText>
					<ErrorImageText>
						Sorry a bad puppy ate this page.
					</ErrorImageText>
				</ErrorImageOverlay>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
