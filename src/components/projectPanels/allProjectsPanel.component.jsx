import React from 'react';
import { Grid, Segment, Table } from 'semantic-ui-react';

export default function AllProjectsPanel({ projects }) {
	return (
		<Grid>
			<Grid.Row>
				<Grid.Column width={16}>
					<Segment>
						<Table basic='very'>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>Project</Table.HeaderCell>
									<Table.HeaderCell>Manager</Table.HeaderCell>
									<Table.HeaderCell>Started on</Table.HeaderCell>
								</Table.Row>
							</Table.Header>

							<Table.Body>
								{projects &&
									projects.map((project) => {
										return (
											<Table.Row key={project.id}>
												<Table.Cell>{project.name}</Table.Cell>
												<Table.Cell>other</Table.Cell>
												<Table.Cell>
													{new Date(
														project.createdDate
													).toDateString()}
												</Table.Cell>
											</Table.Row>
										);
									})}
							</Table.Body>
						</Table>
					</Segment>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}
