import React, { useState } from 'react';
import {
	Segment,
	Grid,
	Table,
	Input,
	Loader,
} from 'semantic-ui-react';

export const SearchAndTable = ({ tableData }) => {
	const { data } = tableData;
	const [search, setSearch] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const updateSearch = (e) => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 300);
		setSearch(e.target.value);
	};

	const filteredSearch = () => {
		return data.filter((d) => {
			return (
				d.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
			);
		});
	};

	return (
		<Segment>
			<Grid>
				<Grid.Column>
					<Input
						loading={isLoading}
						icon='file alternate outline'
						iconPosition='left'
						placeholder='Search tickets...'
						type='text'
						value={search}
						onChange={updateSearch}
					/>

					<Table celled striped color='teal' stackable>
						<Table.Header>
							<Table.Row>
								{tableData.labels.map((label) => {
									return (
										<Table.HeaderCell key={label}>
											{label}
										</Table.HeaderCell>
									);
								})}
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{isLoading ? (
								<Table.Row>
									<Table.Cell textAlign='center'>
										<Loader active inline='centered' />
									</Table.Cell>
								</Table.Row>
							) : (
								tableData.displayData(filteredSearch())
							)}
						</Table.Body>
					</Table>
				</Grid.Column>
			</Grid>
		</Segment>
	);
};
