import React from 'react'
import Tab from './Tab.js'

const Tabs = (props) => (
  <div className='ui top attached tabular menu'>
    <i className="fa fa-plus" style={{marginTop: 15, marginRight: 10, marginLeft: 5}}></i>
    {
      props.tabs.map((tab, index) => (
        <Tab tab={tab} index={index} onTitleClick={props.onTitleClick}/>
      ))
    }
  </div>
);

export default Tabs;
