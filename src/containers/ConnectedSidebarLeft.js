import { connect } from 'react-redux'
import SidebarLeft from '../components/SidebarLeft.js'
import openModal from '../actions/openModal.js'
import closeSidebar from '../actions/closeSidebar.js'

const mapStateToSidebarProps = (state) => (
    {
        isOpen: state.sidebarActive,
    }
);

const mapDispatchToSidebarProps = (dispatch) => (
  {
    handleChatClick: () => {
        dispatch(closeSidebar());
    },
    handleUsersClick: () => {
        dispatch(openModal());
        dispatch(closeSidebar());
    }
  }
);

const ConnectedSidebarLeft = connect(
  mapStateToSidebarProps,
  mapDispatchToSidebarProps
)(SidebarLeft);

export default ConnectedSidebarLeft;
