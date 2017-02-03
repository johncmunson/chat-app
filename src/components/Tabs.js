import React from 'react'
import Tab from './Tab.js'
import uuid from 'uuid'

const Tabs = (props) => (
  <div className='ui top attached tabular menu'>
    <i
      className="fa fa-plus"
      style={{marginTop: 15, marginRight: 10, marginLeft: 5}}
      onClick={() => props.handlePlusClick()}
    >
    </i>
    {
      props.tabs.map((tab) => (
        <Tab key={uuid.v4()} tab={tab} onClick={props.handleTitleClick}/>
      ))
    }
  </div>
);

export default Tabs;
