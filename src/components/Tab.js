import React from 'react'

const Tab = ({ tab, onTitleClick, onXClick, renderX }) => (
    <div
      className={tab.active ? 'active item' : 'item'}
    >
      <div onClick={() => onTitleClick(tab.id)}>
        {tab.title}
      </div>
      {
          renderX ?
              <i
                className='fa fa-times-circle-o'
                style={{marginLeft: 5}}
                onClick={() => onXClick(tab.id)}
              >
              </i>
              :
              <div></div>
      }
    </div>
);

export default Tab;
