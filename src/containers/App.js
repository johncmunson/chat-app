import React from 'react'
import ThreadTabs from './ThreadTabs.js'
import ThreadDisplay from './ThreadDisplay.js'

const App = () => (
  <div className='ui segment'>
    <ThreadTabs />
    <ThreadDisplay />
  </div>
);

export default App;
