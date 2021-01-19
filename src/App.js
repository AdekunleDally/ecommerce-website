import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors';

import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from './pages/shop/shop.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

//import {addCollectionAndDocuments, auth, createUserProfileDocument} from './firebase/firebase.utils';
import {auth , createUserProfileDocument} from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions'
//import {selectCollectionsForPreview} from './redux/shop/shop.selectors'

class App extends Component{
  // constructor(){
  //   super();  

  //   this.state={
  //     currentUser:null
  //   }
  // }

 unsubscribeFromAuth=null;
  
  componentDidMount(){
   // const {setCurrentUser, collectionsArray} =this.props;

    const {setCurrentUser} =this.props;
   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
    // this.setState({currentUser:user})
     if(userAuth){
     const userRef= await createUserProfileDocument(userAuth);
    // console.log("UserRef is ",userRef);
     userRef.onSnapshot(snapShot=>{
       setCurrentUser({
           id:snapShot.id,
           ...snapShot.data()
         });
    } );
    
      }
        setCurrentUser(userAuth);
       // addCollectionAndDocuments('collections', collectionsArray.map(({title,items})=>({title,items})));
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div>
         <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />

          <Route 
          exact path='/signin'
          render={()=>
            this.props.currentUser?(
              <Redirect to='/' />
              ): (
                <SignInAndSignUp />
                )
              } 
              />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({ // solves the Redirect issue
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps=dispatch=>({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);


