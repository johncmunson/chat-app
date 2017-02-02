import React from 'react'

const Tab = ({ tab, index, onClick }) => (
    <div
      key={index}
      className={tab.active ? 'active item' : 'item'}
      onClick={() => onClick(tab.id)}
    >
      {tab.title}
    </div>
);

export default Tab;
