import firebase from 'firebase/app' ; 
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyBDbASq0kEMIcuhJc0ut4AGqkBlbxY2l3U",
    authDomain: "e-commerce-db-7570f.firebaseapp.com",
    databaseURL: "https://e-commerce-db-7570f.firebaseio.com",
    projectId: "e-commerce-db-7570f",
    storageBucket: "e-commerce-db-7570f.appspot.com",
    messagingSenderId: "345585395156",
    appId: "1:345585395156:web:9420d7df44848c2a5c2241",
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  var provider= new firebase.auth.GoogleAuthProvider();
  
  provider.setCustomParameters({ prompt: 'select_account'});
  
  export const signInWithGoogle =()=> auth.signInWithPopup(provider);

  export default firebase;