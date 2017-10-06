import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Main from './Main';
import {currentUserRequest, signOut } from '../../actions/authActions';
import checkToken from '../../common/checkToken';

class MainContainer extends React.Component {

    componentDidMount() {
        if (checkToken('userstoken'))
            this.props.currentUserRequest(checkToken('userstoken'));
    }

    onSignOut = (e) => {
        e.preventDefault();
        this.props.signOut();
        document.cookie = 'userstoken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.props.history.push('/');
    };

    render() {
        return (
            <Main
                signOut={this.onSignOut}
                token={checkToken('userstoken')}
                currentUser={this.props.currentUser}
                history={this.props.history}
            />
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.user
});

export default withRouter(connect(mapStateToProps, {
    currentUserRequest,
    signOut
})(MainContainer));