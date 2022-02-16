import React, { useEffect } from 'react';
import { authService } from './config';

useEffect(() => {
    authService.onAuthStateChanged((user) => {
        if (user) {
            setIsLoggedIn(true);
        }
        else {
            setLogout();
        }
    });
}, []);