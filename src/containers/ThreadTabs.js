import { connect } from 'react-redux'
import Tabs from '../components/Tabs.js'
import openThread from '../actions/openThread.js'
import openModal from '../actions/openModal.js'
import { getTabs } from '../reducers/selectors.js'

const mapStateToTabsProps = (state) => (
    {
        tabs: getTabs(state)
    }
);

const mapDispatchToTabsProps = (dispatch) => (
  {
    handleTitleClick: (id) => (
      dispatch(openThread(id))
    ),
    handlePlusClick: () => (
        dispatch(openModal())
    )
  }
);

const ThreadTabs = connect(
  mapStateToTabsProps,
  mapDispatchToTabsProps
)(Tabs);

export default ThreadTabs;
