import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react'

class SidebarLeft extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='comment'>
              <Icon name='comment outline' />
            </Menu.Item>
            <Menu.Item name='comment'>
              <Icon name='comment outline' />
            </Menu.Item>
            <Menu.Item name='comment'>
              <Icon name='comment outline' />
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarLeft
