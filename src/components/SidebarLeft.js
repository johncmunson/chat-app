import React from 'react'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SidebarLeft = ({ isOpen, handleChatClick, handleUsersClick, handleListClick, children }) => (
    <div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={isOpen} icon='labeled' vertical inverted>
          <Menu.Item onClick={() => handleChatClick()} name='comment'>
            <Icon name='comment outline' />
          </Menu.Item>
          <Menu.Item onClick={() => handleUsersClick()} name='add user'>
            <Icon name='add user' />
          </Menu.Item>
          <Menu.Item onClick={() => handleListClick()} name='user list'>
            <Link to='/users'>
              <Icon name='list layout' />
            </Link>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            {children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
);

export default SidebarLeft
