import React, { Component } from 'react';
import _ from 'lodash';
import {
	Grid,
	Checkbox,
	Search,
	Header,
	Table,
	Image,
	List,
	Form,
} from 'semantic-ui-react';

const initialState = {
	isLoading: false,
	results: [],
	value: '',
};

class SearchComponent extends Component {
	constructor(props) {
		super(props);

		this.state = initialState;
	}
	source = () => {
		const source = this.props.users.map((user) => ({
			title: user.name,
			id: user.id,
		}));
		return source;
	};

	handleResultSelect = (e, { result }) =>
		this.setState({ value: result.title });

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, value });

		setTimeout(() => {
			if (this.state.value.length < 1)
				return this.setState(initialState);

			const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
			const isMatch = (result) => re.test(result.title);

			this.setState({
				isLoading: false,
				results: _.filter(this.source(), isMatch),
			});
		}, 300);
	};

	render() {
		const { isLoading, value, results } = this.state;
		const { users, onToggle } = this.props;

		return (
			<Grid>
				<Grid.Column width={16}>
					<Search
						loading={isLoading}
						onResultSelect={this.handleResultSelect}
						onSearchChange={_.debounce(this.handleSearchChange, 500, {
							leading: true,
						})}
						results={results}
						value={value}
						{...this.props}
					/>
				</Grid.Column>
				<Grid.Column width={16}>
					<Table basic='very' celled collapsing>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Developer</Table.HeaderCell>
								<Table.HeaderCell>Current Projects</Table.HeaderCell>
								<Table.HeaderCell>Add</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{results.length < 1
								? users.map((user) => {
										return (
											<Table.Row key={user.id}>
												<Table.Cell>
													<Header as='h4' image>
														<Image
															src='https://react.semantic-ui.com/images/avatar/small/lena.png'
															rounded
															size='mini'
														/>
														<Header.Content>
															{user.name}
														</Header.Content>
													</Header>
												</Table.Cell>
												<Table.Cell>22</Table.Cell>
												<Table.Cell>
													<Form.Field>
														<List>
															<List.Item>
																<Checkbox
																	toggle
																	name={user.name}
																	onClick={() => onToggle(user.id)}
																/>
															</List.Item>
														</List>
													</Form.Field>
												</Table.Cell>
											</Table.Row>
										);
								  })
								: results.map((result) => {
										return (
											<Table.Row key={result.id}>
												<Table.Cell>
													<Header as='h4' image>
														<Image
															src='https://react.semantic-ui.com/images/avatar/small/lena.png'
															rounded
															size='mini'
														/>
														<Header.Content>
															{result.title}
														</Header.Content>
													</Header>
												</Table.Cell>
												<Table.Cell>22</Table.Cell>
												<Table.Cell>
													<Form.Field>
														<List>
															<List.Item>
																<Checkbox value={result.id} toggle />
															</List.Item>
														</List>
													</Form.Field>
												</Table.Cell>
											</Table.Row>
										);
								  })}
						</Table.Body>
					</Table>
				</Grid.Column>
			</Grid>
		);
	}
}

export default SearchComponent;
