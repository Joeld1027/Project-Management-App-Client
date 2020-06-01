import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	Container,
	Breadcrumb,
	Card,
	Divider,
	Segment,
	Grid,
	List,
	Image,
	Header,
	Feed,
	Label,
} from 'semantic-ui-react';
import { ContentLoader } from '../../components/ContentLoader/ContentLoader.component';
import Comments from '../../components/comments/Comments.component';

const sections = [
	{ key: 'Home', content: 'Tasks', link: true },
	{ key: 'Shirt', content: 'Task Details', active: true },
];

export const TaskDetails = () => {
	const [active, setActive] = useState(false);
	const [currentTask, setCurrentTask] = useState({
		taskInfo: {},
		createdBy: { firstName: 'N/A' },
		comments: [],
		asignedDevs: [],
	});
	const id = useParams().id;
	useEffect(() => {
		setActive(true);
		const fetchTask = async () => {
			try {
				const fetchedTask = await fetch(
					`http://localhost:5000/api/tickets/${id}`
				).then((task) => task.json());

				await setCurrentTask({ taskInfo: fetchedTask });
				setActive(false);
				console.log(fetchedTask);
			} catch (err) {
				console.log(err);
			}
		};

		fetchTask();
	}, [id]);
	console.log(currentTask);

	return active ? (
		<ContentLoader active={active} />
	) : (
		<Container>
			<Breadcrumb icon='right angle' sections={sections} />
			<Divider />
			<Grid relaxed>
				<Grid.Row columns={2}>
					<Grid.Column width={6}>
						<Card
							fluid
							extra='ASSIGNED PROJECT: Project'
							centered
							color='teal'
							raised
							header='TASK NAME'
							meta={
								<Label color='green' horizontal>
									In Progress
								</Label>
							}
							description='description goes here'
						/>
					</Grid.Column>
					<Grid.Column width={10}>
						<Segment padded raised compact color='teal'>
							<List horizontal relaxed>
								<List.Item
									header='Created On'
									description='00/00/0000'
								/>
								<List.Item
									header='Category'
									description='Bug/Fixes'
								/>
								<List.Item header='Priority' description='High' />
								<List.Item
									header='Created By'
									description='Creator name'
								/>
							</List>
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row centered divided>
					<Grid.Column width={8}>
						<Segment padded>
							<Header textAlign='center' content='Assigned Devs' />
							<List divided verticalAlign='middle'>
								<List.Item>
									<Image
										avatar
										src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg'
									/>
									<List.Content>
										<List.Header as='a'>Daniel Louise</List.Header>
									</List.Content>
								</List.Item>
								<List.Item>
									<Image
										avatar
										src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg'
									/>
									<List.Content>
										<List.Header as='a'>Stevie Feliciano</List.Header>
									</List.Content>
								</List.Item>
								<List.Item>
									<Image
										avatar
										src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'
									/>
									<List.Content>
										<List.Header as='a'>Elliot Fu</List.Header>
									</List.Content>
								</List.Item>
							</List>
							<Header textAlign='center' content='Task History' />
							<Feed>
								<Feed.Event
									icon='pencil'
									date='Today'
									summary="You posted on your friend Stevie Feliciano's wall."
								/>

								<Feed.Event>
									<Feed.Label icon='pencil' />
									<Feed.Content
										date='Today'
										summary="You posted on your friend Stevie Feliciano's wall."
									/>
								</Feed.Event>
							</Feed>
						</Segment>
					</Grid.Column>
					<Grid.Column width={8}>
						<Header textAlign='center' content='Comments' />
						<Comments />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};
