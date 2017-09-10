import React, { Component } from 'react'
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './UserList.css';

export default class UserList extends Component {

    render() {
        const userList = !this.props.users ? null : this.props.users.map((item, index)=> {
            if (item.login !== 'admin')
                return (
                    <tr className={item.banned ? 'banned' : ''} key={index}>
                        <td className="user-login">
                            {item.login}
                        </td>
                        <td className="user-name">
                            {item.name && item.name}
                        </td>
                        <td className="user-age">
                            {item.age && item.age}
                        </td>
                        <td className="ban">
                            <Button onClick={this.props.onBan.bind(null, item)}>{item.banned ? 'Unban' : 'Ban'}</Button>
                        </td>
                    </tr>
                )
        });
        
        return (
            <div>
                <table className='user-list'>
                    <tbody>
                        {userList}
                    </tbody>
                </table>
                <Link to='/'><Button primary>Back</Button></Link>
            </div>
        )
    }
}
