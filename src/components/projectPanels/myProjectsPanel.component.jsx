import React from 'react';
import {
	Table,
	Grid,
	Segment,
	Image,
	Progress,
} from 'semantic-ui-react';

export default function MyProjectsPanel({ projects }) {
	return (
		<Grid>
			<Grid.Row>
				<Grid.Column width={10}>
					<Segment>
						<Table basic='very'>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>Project</Table.HeaderCell>
									<Table.HeaderCell>Progress</Table.HeaderCell>
									<Table.HeaderCell>Started on</Table.HeaderCell>
								</Table.Row>
							</Table.Header>

							<Table.Body>
								{projects &&
									projects.map((project) => {
										return (
											<Table.Row key={project.id}>
												<Table.Cell>{project.name}</Table.Cell>
												<Table.Cell>
													<Progress
														color='green'
														value='3'
														total='5'
														progress='percent'
													/>
												</Table.Cell>
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
				<Grid.Column width={6}>
					<Segment>
						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
					</Segment>
					<Segment>
						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
					</Segment>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}
