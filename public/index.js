import React from 'react';
import ReactDOM from 'react-dom';
import config, { authService } from './config';
import AuthService from './service';

const authService = new AuthService();

ReactDOM.render(
    <React.StrictMode>
        <App authService={authService} />
    </React.StrictMode>,
    document.getElementById('root')
);