import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { uploadImage, changeProfileRequest } from '../../actions/usersActions';
import TaskFormContainer from '../Task/TaskForm/TaskFormContainer';
import UserImageForm from './UserImageForm';
import checkToken from '../../common/checkToken';
import './UserContainer.css';

function bufferToBase64(buf) {
    var binstr = Array.prototype.map.call(buf, function (ch) {
        return String.fromCharCode(ch);
    }).join('');
    return btoa(binstr);
}

class UserContainer extends Component {

  state = {
    editParagraph: false
  };

  onSubmit = (file) => {
    const data = new FormData();
    data.append('file', file);
    this.props.uploadImage(data, checkToken('userstoken'));
  };

  resetIcon = () => {
    const {name, age} = this.props.userInfo.user;
    this.props.changeProfileRequest({name, age, photo: {data: Buffer, contentType: String}}, checkToken('userstoken'));
  };

  render() {
    const {login, name, age, photo, country, city} = this.props.userInfo.user;

    if (typeof photo !== 'undefined') {
      var src = bufferToBase64(photo.data.data);
    }

    return (
      <div className='user-container'>
        {
          this.props.userInfo.user.banned
          ? 
            <h4>{login}, you were banned!</h4>
          : 
          <div>
            <div className="user-photo">
              {
                photo 
                ? <div className="image-container">
                    <img src={`data:image/png;base64,${src}`} alt="pic"/>
                    <span onClick={this.resetIcon} className="remove-image">Remove image</span>
                  </div>
                : <UserImageForm onSubmit={this.onSubmit}/>
              }
            </div>

            <div className="user-info">
              <div className="profile-module">
                {name && <p>Your name: {name}</p>}
                {age && <p>Your age: {age}</p>}
                {country && <p>Your country: {country}</p>}
                {city && <p>Your city: {city}</p>}
                <Link to='/edit'><Button primary>Edit your profile</Button></Link>
              </div>

              <div className="wall-module">

                <TaskFormContainer/>

                <p>No posts, would you like to <Link to="/task-create">add</Link> task?</p>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.user
});

export default connect(mapStateToProps, {uploadImage, changeProfileRequest})(UserContainer);