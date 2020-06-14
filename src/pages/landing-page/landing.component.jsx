import React from 'react';
import { LandingPageContainer } from './landing.styles';
import { connect } from 'react-redux';
import projectimg from '../../assets/projectlanding.png';
import taskimg from '../../assets/tasks.png';
import Collab from '../../assets/collab.svg';
import logo from '../../assets/Logo3.png';
import { logout } from '../../redux/user/user.actions';
import {
	Menu,
	Container,
	Image,
	Segment,
	Grid,
	Divider,
	Header,
	Button,
	Icon,
	List,
} from 'semantic-ui-react';

const Landing = () => {
	let mobile = false;

	return (
		<>
			<Menu
				borderless
				fluid
				size='small'
				inverted
				style={{ backgroundColor: '#303e51', marginBottom: '0' }}
			>
				<Container>
					<Menu.Item header>
						<Image
							size='tiny'
							src={logo}
							style={{ marginRight: '1.5em' }}
						/>
						CreativeJ Management
					</Menu.Item>
					<Menu.Menu position='right'>
						<Menu.Item>
							<Button
								style={{ backgroundColor: '#524C73', color: '#fff' }}
								size='huge'
							>
								Log In
							</Button>
						</Menu.Item>
						<Menu.Item>
							<Button
								style={{ backgroundColor: '#524C73', color: '#fff' }}
								size='huge'
							>
								Get-Started
							</Button>
						</Menu.Item>
					</Menu.Menu>
				</Container>
			</Menu>
			<LandingPageContainer>
				<Container text textAlign='center' fluid>
					<Header
						inverted
						as='h1'
						content='Keep your remote team coordinated'
						style={{
							fontSize: mobile ? '2em' : '4em',
							fontWeight: 'normal',
							marginBottom: 0,
						}}
					/>
					<Header
						inverted
						as='h2'
						content='Organize your projects, from wherever you are.'
						style={{
							fontSize: mobile ? '1.5em' : '1.7em',
							fontWeight: 'normal',
						}}
					/>
					<Button
						style={{ backgroundColor: '#524C73', color: '#fff' }}
						size='huge'
					>
						Get Started
						<Icon name='right arrow' />
					</Button>
				</Container>
			</LandingPageContainer>

			<Segment style={{ padding: '8em 0em' }} vertical>
				<Grid container stackable verticalAlign='middle'>
					<Grid.Row>
						<Grid.Column width={8}>
							<Header as='h3' style={{ fontSize: '2.3em' }}>
								We help teams stay connected.
							</Header>
							<p style={{ fontSize: '1.4em' }}>
								With the powerful task creation and tracking, we can
								help remote teams stay on the same page across all
								their projects.
							</p>
						</Grid.Column>
						<Grid.Column floated='right' width={6}>
							<Image size='large' src={Collab} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>

			<Segment style={{ padding: '8em 0em' }} vertical>
				<Grid container stackable verticalAlign='middle'>
					<Grid.Row>
						<Grid.Column floated='right' width={8}>
							<Image size='big' src={taskimg} />
						</Grid.Column>
						<Grid.Column width={8}>
							<Header as='h3' style={{ fontSize: '2.3em' }}>
								Create and track all your tasks
							</Header>
							<p style={{ fontSize: '1.4em' }}>
								Have your team create and organize all tasks for the
								projects. With priority selection and category
								specification to better track issues.
							</p>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column textAlign='center'>
							<Button
								style={{ backgroundColor: '#524C73', color: '#fff' }}
								size='huge'
							>
								Check It Out
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>

			<Segment style={{ padding: '8em 0em' }} vertical>
				<Container text>
					<Header as='h3' style={{ fontSize: '2.3em' }}>
						Powerful Dashboard to track all Projects
					</Header>
					<p style={{ fontSize: '1.4em' }}>
						Take advantage of the power of data, and see how your
						porjects are developing. Track repeated issues and
						maintain record of your projects.
					</p>
					<Divider
						as='h4'
						className='header'
						horizontal
						style={{ margin: '3em 0em', textTransform: 'uppercase' }}
					/>

					<Image size='big' src={projectimg} />
				</Container>
			</Segment>

			<Segment
				inverted
				vertical
				style={{ padding: '5em 0em', backgroundColor: '#303e51' }}
			>
				<Container>
					<Grid divided inverted stackable>
						<Grid.Row>
							<Grid.Column width={3}>
								<Header inverted as='h4' content='About' />
								<List link inverted>
									<List.Item as='a'>Sitemap</List.Item>
									<List.Item as='a'>Contact Us</List.Item>
								</List>
							</Grid.Column>
							<Grid.Column width={3}>
								<Header inverted as='h4' content='Services' />
								<List link inverted>
									<List.Item as='a'>Team Plans</List.Item>
									<List.Item as='a'>Yearly Subscription</List.Item>
									<List.Item as='a'>How To Access</List.Item>
								</List>
							</Grid.Column>
							<Grid.Column width={7}>
								<Header as='h4' inverted>
									Company
								</Header>
								<p>@Creative Project Managment - Joel D. Infante.</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Segment>
		</>
	);
};
export default connect(null, { logout })(Landing);
