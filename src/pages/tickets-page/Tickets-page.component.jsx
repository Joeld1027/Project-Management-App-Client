import React, { Component } from 'react';

import {
	Grid,
	Image,
	Container,
	Table,
	Label,
	Menu,
	Icon,
	Divider,
	Header,
	Input,
} from 'semantic-ui-react';
import { TicketsPageContainer } from './Tickets-page.styles';

class TicketsPage extends Component {
	render() {
		return (
			<TicketsPageContainer>
				<Container>
					<div>User Tickets</div>
					<Grid>
						<Grid.Column width={12}>
							<Table celled color='teal'>
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>Header</Table.HeaderCell>
										<Table.HeaderCell>Header</Table.HeaderCell>
										<Table.HeaderCell>Header</Table.HeaderCell>
									</Table.Row>
								</Table.Header>

								<Table.Body>
									<Table.Row>
										<Table.Cell>
											<Label ribbon>First</Label>
										</Table.Cell>
										<Table.Cell>Cell</Table.Cell>
										<Table.Cell>Cell</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>Cell</Table.Cell>
										<Table.Cell>Cell</Table.Cell>
										<Table.Cell>Cell</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>Cell</Table.Cell>
										<Table.Cell>Cell</Table.Cell>
										<Table.Cell>Cell</Table.Cell>
									</Table.Row>
								</Table.Body>

								<Table.Footer>
									<Table.Row>
										<Table.HeaderCell colSpan='3'>
											<Menu floated='right' pagination>
												<Menu.Item as='a' icon>
													<Icon name='chevron left' />
												</Menu.Item>
												<Menu.Item as='a'>1</Menu.Item>
												<Menu.Item as='a'>2</Menu.Item>
												<Menu.Item as='a'>3</Menu.Item>
												<Menu.Item as='a'>4</Menu.Item>
												<Menu.Item as='a' icon>
													<Icon name='chevron right' />
												</Menu.Item>
											</Menu>
										</Table.HeaderCell>
									</Table.Row>
								</Table.Footer>
							</Table>
						</Grid.Column>
						<Grid.Column width={4}>
							<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
						</Grid.Column>
					</Grid>
					<Divider />
					<Grid>
						<Grid.Column>
							<Header
								as='h2'
								icon='plug'
								content='All Active Tickets'
								floated='right'
							/>

							<Input
								icon='file alternate outline'
								iconPosition='left'
								placeholder='Search tickets...'
							/>

							<Table striped color='teal'>
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>Name</Table.HeaderCell>
										<Table.HeaderCell>Date Joined</Table.HeaderCell>
										<Table.HeaderCell>E-mail</Table.HeaderCell>
										<Table.HeaderCell>Called</Table.HeaderCell>
									</Table.Row>
								</Table.Header>

								<Table.Body>
									<Table.Row>
										<Table.Cell>John Lilki</Table.Cell>
										<Table.Cell>September 14, 2013</Table.Cell>
										<Table.Cell>jhlilk22@yahoo.com</Table.Cell>
										<Table.Cell>No</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>Jamie Harington</Table.Cell>
										<Table.Cell>January 11, 2014</Table.Cell>
										<Table.Cell>
											jamieharingonton@yahoo.com
										</Table.Cell>
										<Table.Cell>Yes</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>Jill Lewis</Table.Cell>
										<Table.Cell>May 11, 2014</Table.Cell>
										<Table.Cell>jilsewris22@yahoo.com</Table.Cell>
										<Table.Cell>Yes</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>John Lilki</Table.Cell>
										<Table.Cell>September 14, 2013</Table.Cell>
										<Table.Cell>jhlilk22@yahoo.com</Table.Cell>
										<Table.Cell>No</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>John Lilki</Table.Cell>
										<Table.Cell>September 14, 2013</Table.Cell>
										<Table.Cell>jhlilk22@yahoo.com</Table.Cell>
										<Table.Cell>No</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>Jamie Harington</Table.Cell>
										<Table.Cell>January 11, 2014</Table.Cell>
										<Table.Cell>
											jamieharingonton@yahoo.com
										</Table.Cell>
										<Table.Cell>Yes</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>Jill Lewis</Table.Cell>
										<Table.Cell>May 11, 2014</Table.Cell>
										<Table.Cell>jilsewris22@yahoo.com</Table.Cell>
										<Table.Cell>Yes</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>John Lilki</Table.Cell>
										<Table.Cell>September 14, 2013</Table.Cell>
										<Table.Cell>jhlilk22@yahoo.com</Table.Cell>
										<Table.Cell>No</Table.Cell>
									</Table.Row>
								</Table.Body>
							</Table>
						</Grid.Column>
					</Grid>
				</Container>
			</TicketsPageContainer>
		);
	}
}

export default TicketsPage;
