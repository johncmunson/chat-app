import React from 'react'
import ReactModal from 'react-modal'

// const newChildren = React.Children.map(this.props.children, function(child) {
//   return React.cloneElement(child, { foo: true })
// });

const Modal = (props) => {
    return (
        <ReactModal
            isOpen={props.isOpen}
            contentLabel="New Thread Modal"
        >
            <button onClick={props.handleClick}>
                Close me
            </button>
        </ReactModal>
    )
}

export default Modal;
