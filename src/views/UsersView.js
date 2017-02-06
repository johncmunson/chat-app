import React from 'react'
import ConnectedUsersList from '../containers/ConnectedUsersList.js'
import NewThreadModal from '../containers/NewThreadModal.js'

const UsersView = () => (
    <div
      style={{
        backgroundColor: 'papayawhip'
      }}
      className='ui segment'
    >
      <ConnectedUsersList />
      <NewThreadModal />
    </div>
);

export default UsersView;
