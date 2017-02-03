import React from 'react'
import ReactModal from 'react-modal'
import uuid from 'uuid'

// const newChildren = React.Children.map(this.props.children, function(child) {
//   return React.cloneElement(child, { foo: true })
// });

const Modal = (props) => {
    let input;
    return (
        <ReactModal
            isOpen={props.isOpen}
            contentLabel="New Thread Modal"
        >
            <div className='ui input'>
              <input
                ref={node => input = node}
                type='text'
              >
              </input>
              <button
                onClick={() => {
                  props.handleClick(uuid.v4(), input.value);
                  input.value = '';
                }}
                className='ui primary button'
                type='submit'
              >
                Submit
              </button>
            </div>
        </ReactModal>
    )
}

export default Modal;
