import React from 'react';
import SigninForm from './SigninForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signinRequest, currentUserRequest } from '../../../actions/authActions';

class SigninContainer extends React.Component {

    submit = (data) =>
        this.props.signinRequest(data).then((response) => {
            document.cookie = `userstoken=${response.data}`;
            this.props.history.push('/');
            this.props.currentUserRequest(response.data);
        });

    render() {
        return (
            <div className="authorization-wrapper">
                <h1>Please login or <Link to='/signup'>register</Link></h1>
                <SigninForm 
                    currentUserRequest={this.props.currentUserRequest} 
                    signinRequest={this.submit}
                />
            </div>
        )
    }
}

export default connect(null, {
    signinRequest,
    currentUserRequest
})(SigninContainer);