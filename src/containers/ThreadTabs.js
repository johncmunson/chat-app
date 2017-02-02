import { connect } from 'react-redux'
import Tabs from '../components/Tabs.js'
import openThread from '../actions/openThread.js'
import { getTabs } from '../reducers/selectors.js'

const mapStateToTabsProps = (state) => (
    {
        tabs: getTabs(state)
    }
);

const mapDispatchToTabsProps = (dispatch) => (
  {
    onTitleClick: (id) => (
      dispatch(openThread(id))
    ),
  }
);

const ThreadTabs = connect(
  mapStateToTabsProps,
  mapDispatchToTabsProps
)(Tabs);

export default ThreadTabs;
