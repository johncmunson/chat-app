import React from 'react'

const Tab = ({ tab, index, onTitleClick }) => (
    <div
      key={index}
      className={tab.active ? 'active item' : 'item'}
    >
      <div onClick={() => onTitleClick(tab.id)}>
        {tab.title}
      </div>
    </div>
);

export default Tab;
