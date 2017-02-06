import React from 'react'
import Tab from './Tab.js'
import uuid from 'uuid'

const Tabs = (props) => (
  <div className='ui top attached tabular menu'>
    {
        props.numTabs === 4 ?
            <div></div>
            :
            <i
              className="fa fa-bars"
              style={{marginTop: 15, marginRight: 10, marginLeft: 5}}
              onClick={() => props.handleBurgerClick()}
            >
            </i>
    }
    {
      props.tabs.map((tab) => (
        <Tab key={uuid.v4()} tab={tab} onTitleClick={props.handleTitleClick} onXClick={props.handleXClick} renderX={props.numTabs === 1 ? false : true}/>
      ))
    }
  </div>
);

export default Tabs;
