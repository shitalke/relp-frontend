import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CREDENTIALS_JSON);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth

export default firebase;