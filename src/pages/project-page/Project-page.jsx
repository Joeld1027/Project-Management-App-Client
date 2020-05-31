import React from 'react';
import { connect } from 'react-redux';
import { Header, Icon, Container, Tab } from 'semantic-ui-react';
import { ProjectPageContainer } from './project-page.styles';
import MyProjectsPanel from '../../components/projectPanels/myProjectsPanel.component';
import ProjectForm from '../../components/projectForm/ProjectForm.component';

const ProjectPage = ({ allProjects, allUsers, currentUser }) => {
	console.log(allProjects);

	const user = currentUser.userInfo;
	const { projects } = allProjects;
	console.log(projects);
	const { users } = allUsers;
	const panes = [
		{
			menuItem: 'Projects',
			render: () => (
				<Tab.Pane>
					<MyProjectsPanel projects={projects} />
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Create Project',
			render: () => (
				<Tab.Pane>
					<ProjectForm users={users} user={user} />
				</Tab.Pane>
			),
		},
	];

	return (
		<ProjectPageContainer>
			<Container>
				<Header as='h1' icon dividing textAlign='center'>
					PROJECTS
					<Icon name='sitemap' />
					<Header.Subheader>Projects details.</Header.Subheader>
				</Header>
				{projects && <Tab panes={panes} defaultActiveIndex={0} />}
			</Container>
		</ProjectPageContainer>
	);
};

const mapStateToProps = (state) => ({
	allProjects: state.projects,
	allUsers: state.user.allUsers,
});
export default connect(mapStateToProps)(ProjectPage);
