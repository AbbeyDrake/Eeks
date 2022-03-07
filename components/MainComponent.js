import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";




class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomeComponent} />
          <Route exact path='/localshops' component={LocalShopsComponent} />
          <Route path='/localshops/:localshopid' component={LocalShopWithId}/>
          <Route path='/plantcare' component={PlantCareComponent} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
    
  };
    
  
}

export default withRouter(Main);
