import React, { useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { selectFilteredTasks } from '../../redux/tasks/tasks.selectors';
import { selectAllProjects } from '../../redux/projects/projects.selectors';
import { selectAllUsers } from '../../redux/user/user.selectors';
import { connect } from 'react-redux';
import { Header, Icon, Container, Tab } from 'semantic-ui-react';
import { ProjectPageContainer } from './project-page.styles';
import MyProjectsPanel from '../../components/projectPanels/myProjectsPanel.component';
import ProjectForm from '../../components/projectPanels/ProjectForm.component';
import ProjectDetails from './project-details.component';

const ProjectPage = ({
	allProjects,
	users,
	currentUser,
	allTasks,
}) => {
	let { path } = useRouteMatch();
	const user = currentUser.userInfo;
	const [activeIndex, setActiveIndex] = useState(0);
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
					<ProjectForm
						setActiveIndex={setActiveIndex}
						users={users}
						user={user}
						tasks={allTasks}
					/>
				</Tab.Pane>
			),
		},
	];

	const handleIndex = (event, data) => {
		setActiveIndex(data.activeIndex);
	};

	return (
		<Switch>
			<Route exact path={path}>
				<ProjectPageContainer>
					<Container>
						<Header as='h1' icon dividing textAlign='center'>
							PROJECTS
							<Icon name='sitemap' />
							<Header.Subheader>Projects details.</Header.Subheader>
						</Header>
						{allProjects && (
							<Tab
								activeIndex={activeIndex}
								panes={panes}
								onTabChange={handleIndex}
							/>
						)}
					</Container>
				</ProjectPageContainer>
			</Route>
			<Route exact path={`${path}/:id`} component={ProjectDetails} />
		</Switch>
	);
};

const mapStateToProps = createStructuredSelector({
	allProjects: selectAllProjects,
	users: selectAllUsers,
	allTasks: selectFilteredTasks,
});
export default connect(mapStateToProps)(ProjectPage);
