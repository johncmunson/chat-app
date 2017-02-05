import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ChatView from './views/ChatView.js'
import SidebarLeft from './components/SidebarLeft.js'

const Hello = () => (
    <p>hello</p>
);

const App = () => (
    <Router>
        <div>
            <SidebarLeft>
                <Route exact path='/' component={ChatView} />
                <Route path='/hello' component={Hello} />
            </SidebarLeft>
        </div>
    </Router>
);

export default App;
