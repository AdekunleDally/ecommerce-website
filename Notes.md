### Only the <HomePage /> component has access to the history props that we need
 
 ## Importing Logo into a component
### 1. import {Link} from 'react-router-dom';
### 2. import {ReactComponent as Logo} from '../../assets/crown.svg';

### 3.  <Link className="logo-container" to="/">
###       <Logo  className="logo"/>
###     </Link>



###  //this pulls in firebase utility library that belongs to fb/app. It is the base import
###    //Setting up Google Authentication Utility
###    const provider= new firebase.auth.GoogleAuthProvider(); //this gives us access to the class GoogleAuthProvider from the authentication library

###  //It takes a couple of custom parameters using the customparameters method and what we want to set is
  //prompt:'select_account'--- This means that we want to always trigger the google pop-up whenever we use
  //the google auth provider for authentication annd signIn
  provider.setCustomParameters({prompt:'select_account'});



  ###  //we create a signIn with google method equal to a function that returns signInWithPopup method off the auth library
  ### //signInWithPopup method takes in different provider class e.g google, twitter, facebook. But we use google in this case
  ###  export const signInWithGoogle =()=> auth.signInWithPopup(provider);

 ### // measurementId: "G-5JYFE6G0KB"










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

   <input onClick={signInWithGoogle} value="SignIn With Google"/>