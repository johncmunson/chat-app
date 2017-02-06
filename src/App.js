import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ChatView from './views/ChatView.js'
import ConnectedSidebarLeft from './containers/ConnectedSidebarLeft.js'

const Hello = () => (
    <p>hello</p>
);

const App = () => (
    <Router>
        <div>
            <ConnectedSidebarLeft>
                <Route exact path='/' component={ChatView} />
                <Route path='/hello' component={Hello} />
            </ConnectedSidebarLeft>
        </div>
    </Router>
);

export default App;
