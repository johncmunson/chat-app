import { connect } from 'react-redux'
import Thread from '../components/Thread.js'
import addMessage from '../actions/addMessage.js'
import deleteMessage from '../actions/deleteMessage.js'
import { getActiveThread } from '../reducers/selectors.js'

const mapStateToThreadProps = (state) => (
  {
    thread: getActiveThread(state)
  }
);

const mapDispatchToThreadProps = (dispatch) => (
  {
    onMessageClick: (id) => (
      dispatch(deleteMessage(id))
    ),
    dispatch: dispatch,
  }
);

const mergeThreadProps = (stateProps, dispatchProps) => (
  {
    ...stateProps,
    ...dispatchProps,
    onMessageSubmit: (text) => (
      dispatchProps.dispatch(
        addMessage(text, stateProps.thread.id)
      )
    ),
  }
);

const ThreadDisplay = connect(
  mapStateToThreadProps,
  mapDispatchToThreadProps,
  mergeThreadProps
)(Thread);

export default ThreadDisplay;
