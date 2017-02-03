import React from 'react'

const Tab = ({ tab, onTitleClick, onXClick }) => (
    <div
      className={tab.active ? 'active item' : 'item'}
    >
      <div onClick={() => onTitleClick(tab.id)}>
        {tab.title}
      </div>
      <i
        className='fa fa-times-circle-o'
        style={{marginLeft: 5}}
        onClick={() => onXClick(tab.id)}
      >
      </i>
    </div>
);

export default Tab;
