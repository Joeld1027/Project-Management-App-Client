import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllProjects } from '../../redux/projects/projects.actions';
import { getAllUsers } from '../../redux/user/user.actions';
import { Header, Icon, Container, Tab } from 'semantic-ui-react';
import { ProjectPageContainer } from './project-page.styles';
import MyProjectsPanel from '../../components/projectPanels/myProjectsPanel.component';
import ProjectForm from '../../components/projectForm/ProjectForm.component';

const ProjectPage = ({
	getAllProjects,
	allProjects,
	getAllUsers,
	allUsers,
}) => {
	useEffect(() => {
		getAllProjects();
	}, [getAllProjects]);
	useEffect(() => {
		getAllUsers();
	}, [getAllUsers]);

	const { projects } = allProjects;
	const { users } = allUsers;
	const testi = useRouteMatch();
	console.log(testi);
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
					<ProjectForm users={users} />
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
				<Tab panes={panes} defaultActiveIndex={0} />
			</Container>
		</ProjectPageContainer>
	);
};

const mapStateToProps = (state) => ({
	allProjects: state.projects,
	allUsers: state.user.allUsers,
});
export default connect(mapStateToProps, {
	getAllProjects,
	getAllUsers,
})(ProjectPage);
