import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ChatView from './views/ChatView.js'

const Hello = () => (
    <p>hello</p>
);

const App = () => (
    <Router>
        <div>
            <Route exact path='/' component={ChatView} />
            <Route path='/hello' component={Hello} />
        </div>
    </Router>
);

export default App;
