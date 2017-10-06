import React from 'react';
import { connect } from 'react-redux';
import {searchRequest} from '../../actions/usersActions';


class PersonContainer extends React.Component {

    componentDidMount() {
        const nickname = this.props.history.location.pathname.split('/').pop();
        this.props.searchRequest(nickname);
    }


    render() {

        const foundUserInfo = (
            <div className="user-info-wrapper">
                {this.props.foundUser.nickName
                    ? <div className="info-wrapper">
                        <p>{this.props.foundUser.nickName}</p>
                    </div>
                    : <p>User not found</p>
                }
            </div>
        );

        return(
            <div>
                {foundUserInfo}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    foundUser: state.search.searchResult
});

export default connect(mapStateToProps, {searchRequest})(PersonContainer);