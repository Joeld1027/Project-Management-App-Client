import React from 'react';
import {
	Grid,
	Image,
	Header,
	Icon,
	Container,
	Segment,
} from 'semantic-ui-react';
import { ProjectPageContainer } from './project-page.styles';

const ProjectPage = () => {
	return (
		<ProjectPageContainer>
			<Container>
				<Header as='h1' icon dividing textAlign='center'>
					PROJECTS
					<Icon name='sitemap' />
					<Header.Subheader>Projects details.</Header.Subheader>
				</Header>
				<Grid>
					<Grid.Row>
						<Grid.Column width={9}>
							<Segment>
								<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
							</Segment>
						</Grid.Column>
						<Grid.Column width={7}>
							<Segment>
								<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
							</Segment>
							<Segment>
								<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</ProjectPageContainer>
	);
};
export default ProjectPage;
