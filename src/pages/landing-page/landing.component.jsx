import React from 'react';
import { LandingPageContainer } from './landing.styles';
import { connect } from 'react-redux';
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

const Landing = ({}) => {
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
					<Menu.Item header as='a'>
						<Image
							size='tiny'
							src={logo}
							style={{ marginRight: '1.5em' }}
						/>
						Project Tracker
					</Menu.Item>
					<Menu.Menu position='right'>
						<Menu.Item name='logout' />
					</Menu.Menu>
				</Container>
			</Menu>
			<LandingPageContainer>
				<Container text textAlign='center' fluid>
					<Header
						inverted
						as='h1'
						content='Imagine-a-Company'
						style={{
							fontSize: mobile ? '2em' : '4em',
							fontWeight: 'normal',
							marginBottom: 0,
						}}
					/>
					<Header
						inverted
						as='h2'
						content='Do whatever you want when you want to.'
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
							<Header as='h3' style={{ fontSize: '2em' }}>
								We Help Companies and Companions
							</Header>
							<p style={{ fontSize: '1.33em' }}>
								We can give your company superpowers to do things that
								they never thought possible. Let us delight your
								customers and empower your needs... through pure data
								analytics.
							</p>
							<Header as='h3' style={{ fontSize: '2em' }}>
								We Make Bananas That Can Dance
							</Header>
							<p style={{ fontSize: '1.33em' }}>
								Yes that's right, you thought it was the stuff of
								dreams, but even bananas can be bioengineered.
							</p>
						</Grid.Column>
						<Grid.Column floated='right' width={6}>
							<Image
								bordered
								rounded
								size='large'
								src='https://cdn.technologyadvice.com/wp-content/uploads/2019/04/Fotolia_240076353_Subscription_Monthly_M.jpg'
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column textAlign='center'>
							<Button size='huge'>Check Them Out</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>

			<Segment style={{ padding: '8em 0em' }} vertical>
				<Grid container stackable verticalAlign='middle'>
					<Grid.Row>
						<Grid.Column floated='right' width={8}>
							<Image
								bordered
								rounded
								size='large'
								src='https://cdn.technologyadvice.com/wp-content/uploads/2019/04/Fotolia_240076353_Subscription_Monthly_M.jpg'
							/>
						</Grid.Column>
						<Grid.Column width={8}>
							<Header as='h3' style={{ fontSize: '2em' }}>
								We Help Companies and Companions
							</Header>
							<p style={{ fontSize: '1.33em' }}>
								We can give your company superpowers to do things that
								they never thought possible. Let us delight your
								customers and empower your needs... through pure data
								analytics.
							</p>
							<Header as='h3' style={{ fontSize: '2em' }}>
								We Make Bananas That Can Dance
							</Header>
							<p style={{ fontSize: '1.33em' }}>
								Yes that's right, you thought it was the stuff of
								dreams, but even bananas can be bioengineered.
							</p>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column textAlign='center'>
							<Button size='huge'>Check Them Out</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>

			<Segment style={{ padding: '8em 0em' }} vertical>
				<Container text>
					<Header as='h3' style={{ fontSize: '2em' }}>
						Breaking The Grid, Grabs Your Attention
					</Header>
					<p style={{ fontSize: '1.33em' }}>
						Instead of focusing on content creation and hard work, we
						have learned how to master the art of doing nothing by
						providing massive amounts of whitespace and generic
						content that can seem massive, monolithic and worth your
						attention.
					</p>
					<Button as='a' size='large'>
						Read More
					</Button>

					<Divider
						as='h4'
						className='header'
						horizontal
						style={{ margin: '3em 0em', textTransform: 'uppercase' }}
					/>

					<Header as='h3' style={{ fontSize: '2em' }}>
						Did We Tell You About Our Bananas?
					</Header>
					<p style={{ fontSize: '1.33em' }}>
						Yes I know you probably disregarded the earlier boasts as
						non-sequitur filler content, but it's really true. It took
						years of gene splicing and combinatory DNA research, but
						our bananas can really dance.
					</p>
					<Button as='a' size='large'>
						I'm Still Quite Interested
					</Button>
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
									<List.Item as='a'>Religious Ceremonies</List.Item>
									<List.Item as='a'>Gazebo Plans</List.Item>
								</List>
							</Grid.Column>
							<Grid.Column width={3}>
								<Header inverted as='h4' content='Services' />
								<List link inverted>
									<List.Item as='a'>Banana Pre-Order</List.Item>
									<List.Item as='a'>DNA FAQ</List.Item>
									<List.Item as='a'>How To Access</List.Item>
									<List.Item as='a'>Favorite X-Men</List.Item>
								</List>
							</Grid.Column>
							<Grid.Column width={7}>
								<Header as='h4' inverted>
									Footer Header
								</Header>
								<p>@Creative Project Managment. Joel D. Infante.</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Segment>
		</>
	);
};
export default connect(null, { logout })(Landing);
