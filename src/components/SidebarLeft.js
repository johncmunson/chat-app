import React from 'react'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

const SidebarLeft = ({ isOpen, handleChatClick, handleUsersClick, children }) => (
    <div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={isOpen} icon='labeled' vertical inverted>
          <Menu.Item onClick={() => handleChatClick()} name='comment'>
            <Icon name='comment outline' />
          </Menu.Item>
          <Menu.Item onClick={() => handleUsersClick()} name='add user'>
            <Icon name='add user' />
          </Menu.Item>
          <Menu.Item name='comment'>
            <Icon name='comment outline' />
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
