import React from 'react'
import ThreadTabs from './ThreadTabs.js'
import ThreadDisplay from './ThreadDisplay.js'
import NewThreadModal from './NewThreadModal.js'

const App = () => (
  <div className='ui segment'>
    <ThreadTabs />
    <ThreadDisplay />
    <NewThreadModal />
  </div>
);

export default App;
