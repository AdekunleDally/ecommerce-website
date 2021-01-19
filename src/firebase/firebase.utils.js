import firebase from 'firebase/app' ; 
import 'firebase/firestore';
import 'firebase/auth';
//import { batch } from 'react-redux';

const config= {
    apiKey: "AIzaSyBDbASq0kEMIcuhJc0ut4AGqkBlbxY2l3U",
    authDomain: "e-commerce-db-7570f.firebaseapp.com",
    databaseURL: "https://e-commerce-db-7570f.firebaseio.com",
    projectId: "e-commerce-db-7570f",
    storageBucket: "e-commerce-db-7570f.appspot.com",
    messagingSenderId: "345585395156",
    appId: "1:345585395156:web:9420d7df44848c2a5c2241",
  };

  export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    //const collectionRef= firestore.collection('users')
   // const collectionSnapshots = await collectionRef.get();
    //collectionsSnapshots.docs --- Gives us the array of snapshots of the documents
   // console.log(collectionSnapshots.docs.map(doc=>doc.data()))
   // console.log(collectionSnapshots)
   // console.log(snapShot)

    if(!snapShot.exists){
      const {displayName, email}= userAuth;
      const createdAt= new Date();

      try{
       await userRef.set({displayName,email, createdAt, ...additionalData})
      } catch(err){
         console.log("error creating user", err.message)
      }
    }

    return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
    const collectionRef = firestore.collection(collectionKey)
    console.log("The collectionRef is : ",collectionRef)

    const batch= firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef= collectionRef.doc();
      batch.set(newDocRef,obj)
    });

    return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = collections =>{
    const transformedCollection = collections.docs.map(doc=>{
      const {title, items} = doc.data();
     
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
   // console.log("THE TRASNFORMED COLLECTION IS ::",transformedCollection)

    return transformedCollection.reduce((accumulator,collection)=>{
      accumulator[collection.title.toLowerCase()] =collection;
      return accumulator;
    }, {});

  };
 

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  var provider= new firebase.auth.GoogleAuthProvider();
  
  provider.setCustomParameters({ prompt: 'select_account'});
  
  export const signInWithGoogle =()=> auth.signInWithPopup(provider);

  export default firebase;