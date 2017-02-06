import { connect } from 'react-redux'
import Tabs from '../components/Tabs.js'
import openThread from '../actions/openThread.js'
import deleteThread from '../actions/deleteThread.js'
import openSidebar from '../actions/openSidebar.js'
import { getTabs, getNumTabs } from '../reducers/selectors.js'

const mapStateToTabsProps = (state) => (
    {
        tabs: getTabs(state),
        numTabs: getNumTabs(state)
    }
);

const mapDispatchToTabsProps = (dispatch) => (
  {
    handleTitleClick: (id) => (
        dispatch(openThread(id))
    ),
    handleXClick: (id) => (
        dispatch(deleteThread(id))
    ),
    handleBurgerClick: () => (
        dispatch(openSidebar())
    )
  }
);

const ThreadTabs = connect(
    mapStateToTabsProps,
    mapDispatchToTabsProps
)(Tabs);

export default ThreadTabs;
