import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/hompage/homepage.components";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInOut from './pages/sign-in-up/Sign-in-up.components';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component{
constructor(){
  super();

  this.state = {
    currentUser: null
  }
}

  unsubscribeFromAuth = null;

  conponentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){  
    return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route exact={true} path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInOut}/>
      </Switch>
        
    </div>
  );
}

}

export default App;
