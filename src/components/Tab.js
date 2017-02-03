import React from 'react'

const Tab = ({ tab, onClick }) => (
    <div
      className={tab.active ? 'active item' : 'item'}
    >
      <div onClick={() => onClick(tab.id)}>
        {tab.title}
      </div>
    </div>
);

export default Tab;
