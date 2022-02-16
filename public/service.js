import firebase from 'firebase';
import { signInWithPopup } from 'firebase/auth';
import app from './config';

class AuthService {
    login(provider) {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();

        return app.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;