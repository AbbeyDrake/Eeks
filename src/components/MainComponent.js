import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import ShopComponent from "./ShopComponent";
import ContactComponent from "./ContactComponent";
import Header from './HeaderComponent';




class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomeComponent} />
          <Route path='/shop' component={ShopComponent} />
          <Route path='/contact' component={ContactComponent} />
          <Redirect to='./home'/>
        </Switch>
      </div>
    );
    
  };  
  
}

export default withRouter(Main);
