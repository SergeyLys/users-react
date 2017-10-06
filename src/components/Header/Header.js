import React from 'react';
import './Header.css';
import SearchFormContainer from '../Forms/searchForm/SearchFormContainer';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

const Header = ({user, signOut, history}) => {
    return (
        <div className="site-header">
            <div className="user-info">
                Hello, <strong>{user}</strong>
            </div>
            <nav>
                <Link to='/'>Home</Link>
                {user === 'admin' ? <Link to='/userlist'>Userlist</Link> : null}
            </nav>
            <SearchFormContainer history={history}/>
            <div className="controls">
                <Button primary onClick={signOut}>Signout</Button>
            </div>
        </div>
    )
};

export default Header;