import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './store';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

import '../style/style.less';

render(App);
if (module.hot) {
    module.hot.accept();
    const NewApp = require('./components/App').default;
    render(NewApp);
}

function render(Component) {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <Component />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('root'));
}
