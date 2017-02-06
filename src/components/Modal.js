import React from 'react'
import ReactModal from 'react-modal'
import uuid from 'uuid'

// const newChildren = React.Children.map(this.props.children, function(child) {
//   return React.cloneElement(child, { foo: true })
// });

const modalStyles = {
    overlay: {
        opacity: '30'
    },
    content: {
        marginLeft: '500',
        marginTop: '120',
        width: '350',
        height: '80'
    }
}

const Modal = (props) => {
    let input;
    return (
        <ReactModal
            isOpen={props.isOpen}
            contentLabel="New Thread Modal"
            style={modalStyles}
        >
            <div className='ui input'>
              <input
                ref={node => input = node}
                type='text'
                maxLength='12'
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
