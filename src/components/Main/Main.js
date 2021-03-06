import 'semantic-ui-css/semantic.min.css';
import './global.css';

import SignupContainer from '../Forms/signup/SignupContainer';
import SigninContainer from '../Forms/signin/SigninContainer';
import EditFormContainer from '../Forms/editForm/EditFormContainer';
import UserContainer from '../User/UserContainer';
import UserListContainer from '../User/UserList/UserListContainer';
import PersonContainer from '../User/PersonContainer';
import SearchContainer from '../../pages/SearchContainer';
import Header from '../Header/Header';
import Error from '../Error';
import { Switch, Route, Redirect } from 'react-router-dom';

import React from 'react';


const Main = ({currentUser, token, signOut, history}) => (
    <div className="site-wrapper">

        <main className="site-main">

            {
                currentUser === null || currentUser.login === '' || currentUser === '' || typeof token === 'undefined'
                ?
                <div className="ui container">
                    <Switch>
                        <Route exact path='/' component={SigninContainer}/>
                        <Route path='/signin' component={SigninContainer}/>
                        <Route path='/signup' component={SignupContainer}/>
                        <Route path='*' component={Error}/>
                    </Switch>
                </div>
                :
                <div className="ui container">
                    <Header user={currentUser.login} signOut={signOut} history={history} />
                    <Switch>
                        <Route exact path='/'
                            render={ props =>
                                <UserContainer {...props} />
                            }
                         />
                        <Route exact path='/userlist'
                            render={ props =>
                                currentUser.login === 'admin'
                                ? <UserListContainer {...props} />
                                : <Redirect to='/'/>
                            }
                        />
                        <Route exact path='/edit' component={EditFormContainer} />
                        <Route exact path='/search' component={SearchContainer} />
                        <Route exact path='/user/:nickname'
                               render={ props => <PersonContainer history={history}/>} />
                        <Route path='*' component={Error}/>
                    </Switch>
                </div>
            }

        </main>

    </div>
);

export default Main;
