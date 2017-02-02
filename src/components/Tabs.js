import React from 'react'
import Tab from './Tab.js'

const Tabs = (props) => (
  <div className='ui top attached tabular menu'>
    {
      props.tabs.map((tab, index) => (
        <Tab tab={tab} index={index} onClick={props.onClick}/>
      ))
    }
  </div>
);

export default Tabs;

// <div
//   key={index}
//   className={tab.active ? 'active item' : 'item'}
//   onClick={() => props.onClick(tab.id)}
// >
//   {tab.title}
// </div>
