import React from 'react'
//import ConnectedUsersList from '../containers/ConnectedUsersList.js'
import NewThreadModal from '../containers/NewThreadModal.js'
import ConnectedPieChart from '../containers/ConnectedPieChart.js'

const UsersView = () => (
    <div
      style={{
        backgroundColor: 'papayawhip'
      }}
      className='ui segment'
    >
      <ConnectedPieChart />
      <NewThreadModal />
    </div>
);

export default UsersView;
