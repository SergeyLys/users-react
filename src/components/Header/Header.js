import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

const Header = ({user, signOut}) => {
    return (
        <div className="site-header">
            <div className="user-info">
                Hello, <strong>{user}</strong>
            </div>
            <nav>
                {user === 'admin' ? <Link to='/userlist'>userlist</Link> : null}
            </nav>
            <div className="controls">
                <Button primary onClick={signOut}>Signout</Button>
            </div>
        </div>
    )
};

export default Header;