import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getAllUsers, banUserRequest} from '../../../actions/usersActions';
import checkToken from '../../../common/checkToken';
import UserList from './UserList';

class UserListContainer extends Component {
    componentDidMount() {
        this.props.getAllUsers(checkToken('userstoken'));
    }

    onBan = (user) => {
        this.props.banUserRequest(user._id, checkToken('userstoken'));
    }

    render() {
        const {userArray} = this.props;
        return (
            <div>
                <UserList onBan={this.onBan} users={userArray} />
            </div>
        )
    }
}

const mapStatToProps = state => ({
    userArray: state.user.users
});

export default connect(mapStatToProps, {getAllUsers, banUserRequest})(UserListContainer);