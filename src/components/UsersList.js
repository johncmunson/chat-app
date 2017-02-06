import React from 'react'

const UsersList = (props) => (
    <ul>
        {props.users.map((user, index) => (
            <li key={index}>
                <i className="fa fa-user"></i>
                {user.title}
            </li>
        ))}
    </ul>
);

export default UsersList;
