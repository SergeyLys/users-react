import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';
import MainContainer from './components/Main/MainContainer';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainContainer/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();