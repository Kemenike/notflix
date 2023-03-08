import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

// Create your own Firebase DB to test. 
import { firebaseApiKey, firebaseAppId } from './keys.js';

const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: "notflix-netflix.firebaseapp.com",
    projectId: "notflix-netflix",
    storageBucket: "notflix-netflix.appspot.com",
    messagingSenderId: "664772672387",
    appId: firebaseAppId
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;