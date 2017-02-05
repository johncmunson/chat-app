import React from 'react'
import ThreadTabs from '../containers/ThreadTabs.js'
import ThreadDisplay from '../containers/ThreadDisplay.js'
import NewThreadModal from '../containers/NewThreadModal.js'

const ChatView = () => (
    <div className='ui segment'>
      <ThreadTabs />
      <ThreadDisplay />
      <NewThreadModal />
    </div>
);

export default ChatView;
