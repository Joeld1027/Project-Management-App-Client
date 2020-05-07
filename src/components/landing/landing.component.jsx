import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/user/user.actions';
import { Menu, Container, Image, Dropdown } from 'semantic-ui-react';

function Landing(props) {
	const logout = (e) => {
		e.preventDefault();
		props.logout();
	};

	return (
		<div>
			<Menu fixed='top' inverted>
				<Container>
					<Menu.Item as='a' header>
						<Image
							size='mini'
							src='/logo.png'
							style={{ marginRight: '1.5em' }}
						/>
						Project Name
					</Menu.Item>
					<Menu.Item as='a'>Home</Menu.Item>

					<Dropdown item simple text='Dropdown'>
						<Dropdown.Menu>
							<Dropdown.Item>List Item</Dropdown.Item>
							<Dropdown.Item>List Item</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Header Item</Dropdown.Header>
							<Dropdown.Item>
								<i className='dropdown icon' />
								<span className='text'>Submenu</span>
								<Dropdown.Menu>
									<Dropdown.Item>List Item</Dropdown.Item>
									<Dropdown.Item>List Item</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown.Item>
							<Dropdown.Item>
								<button onClick={logout}>logout</button>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Container>
			</Menu>
		</div>
	);
}
export default connect(null, { logout })(Landing);
