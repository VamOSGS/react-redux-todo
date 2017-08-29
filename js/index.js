import '../style/style.scss';
import React from 'react';
import App from './App.jsx';
import {AppContainer} from 'react-hot-loader'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './reducers';


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>
    ,
    document.getElementById('root')
);