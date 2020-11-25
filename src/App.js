import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.utils';
//import { Component } from 'react';

class App extends Component{
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

 unsubscribeFromAuth=null;
  
  componentDidMount(){
   this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;


