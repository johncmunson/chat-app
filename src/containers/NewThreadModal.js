import { connect } from 'react-redux'
import Modal from '../components/Modal.js'
import closeModal from '../actions/closeModal.js'
import addThread from '../actions/addThread.js'

const mapStateToModalProps = (state) => (
    {
        isOpen: state.modalActive,
    }
);

const mapDispatchToModalProps = (dispatch) => (
  {
    handleClick: (id, title) => {
      dispatch(closeModal());
      dispatch(addThread(id, title));
    }
  }
);

const NewThreadModal = connect(
  mapStateToModalProps,
  mapDispatchToModalProps
)(Modal);

export default NewThreadModal;
