import React from 'react';
import EditForm from './EditForm';
import { connect } from 'react-redux';
import checkToken from '../../../common/checkToken';
import { changeProfileRequest } from '../../../actions/usersActions';

class EditFormContainer extends React.Component {

    submit = (data) =>
        this.props.changeProfileRequest(data, checkToken('userstoken'))
            .then(() => {
                this.props.history.push('/');
            });

    render() {
        return (
            <div className="authorization-wrapper">
                <h1>Change your profile</h1>
                <EditForm 
                    currentInfo={this.props.currentInfo}
                    changeProfileRequest={this.submit}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentInfo: state.user.user
});

export default connect(mapStateToProps, {changeProfileRequest})(EditFormContainer);