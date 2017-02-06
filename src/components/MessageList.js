import React from 'react'
import uuid from 'uuid'

const MessageList = (props) => (
  <div className='ui comments'>
    {
      props.messages.map((m, index) => (
        <div
          className='comment'
          key={uuid.v4()}
          onClick={() => props.onClick(m.id)}
        >
          <div className='text'>
            {m.text}
            <span className='metadata'>...{m.timestamp}</span>
          </div>
        </div>
      ))
    }
  </div>
);

export default MessageList;
