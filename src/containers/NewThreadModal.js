import { connect } from 'react-redux'
import Modal from '../components/Modal.js'
import toggleModal from '../actions/toggleModal.js'

const mapStateToModalProps = (state) => (
    {
        isOpen: state.modalActive,
    }
);

const mapDispatchToModalProps = (dispatch) => (
  {
    handleClick: () => (
      dispatch(toggleModal())
    )
  }
);

const NewThreadModal = connect(
  mapStateToModalProps,
  mapDispatchToModalProps
)(Modal);

export default NewThreadModal;
