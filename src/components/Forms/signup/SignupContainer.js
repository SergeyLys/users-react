import React from 'react';
import {connect} from 'react-redux';
import {signupRequest} from '../../../actions/authActions';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';

class SignupContainer extends React.Component {
    render() {
        return (
            <div className="authorization-wrapper">
                <h1>Have an account? <Link to='/signin'>Login</Link></h1>
                <SignupForm history={this.props.history} signupRequest={this.props.signupRequest} />
            </div>
        )
    }
}

export default connect(null, {signupRequest})(SignupContainer);