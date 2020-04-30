import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAjD-8EaVvBsnzMCxdLJSoMxsmnWilUZFs",
    authDomain: "ecommerce-db-c2691.firebaseapp.com",
    databaseURL: "https://ecommerce-db-c2691.firebaseio.com",
    projectId: "ecommerce-db-c2691",
    storageBucket: "ecommerce-db-c2691.appspot.com",
    messagingSenderId: "131728898854",
    appId: "1:131728898854:web:bb27827dc2fb50c4cb1fe7",
    measurementId: "G-47MM306KBN"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;