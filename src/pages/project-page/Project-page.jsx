import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectFilteredTasks } from '../../redux/tasks/tasks.selectors';
import { selectAllProjects } from '../../redux/projects/projects.selectors';
import { selectAllUsers } from '../../redux/user/user.selectors';
import { connect } from 'react-redux';
import { Header, Icon, Container, Tab } from 'semantic-ui-react';
import { ProjectPageContainer } from './project-page.styles';
import MyProjectsPanel from '../../components/projectPanels/myProjectsPanel.component';
import ProjectForm from '../../components/projectForm/ProjectForm.component';

const ProjectPage = ({
	allProjects,
	users,
	currentUser,
	allTasks,
}) => {
	const user = currentUser.userInfo;
	const panes = [
		{
			menuItem: 'Projects',
			render: () => (
				<Tab.Pane>
					<MyProjectsPanel projects={allProjects} />
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Create Project',
			render: () => (
				<Tab.Pane>
					<ProjectForm users={users} user={user} tasks={allTasks} />
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
				{allProjects && <Tab panes={panes} defaultActiveIndex={0} />}
			</Container>
		</ProjectPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	allProjects: selectAllProjects,
	users: selectAllUsers,
	allTasks: selectFilteredTasks,
});
export default connect(mapStateToProps)(ProjectPage);
