import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ChatView from './views/ChatView.js'
import UsersView from './views/UsersView.js'
import ConnectedSidebarLeft from './containers/ConnectedSidebarLeft.js'

const App = () => (
    <Router>
        <div>
            <ConnectedSidebarLeft>
                <Route path='/chat-app' component={ChatView} />
                <Route path='/users' component={UsersView} />
            </ConnectedSidebarLeft>
        </div>
    </Router>
);

export default App;
