import { connect } from 'react-redux'
import UsersList from '../components/UsersList.js'
import { getUsers } from '../reducers/selectors.js'

const mapStateToUsersListProps = (state) => (
    {
        users: getUsers(state)
    }
);

const ConnectedUsersList = connect(
    mapStateToUsersListProps
)(UsersList);

export default ConnectedUsersList;
