import React,{Component} from 'react';
import Layout from './components/hoc/Layout/Layout';
import BurgerBuilder from '././containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import {connect} from 'react-redux'
import * as actions from './store/actions/index'
import {Route,Switch,Redirect} from 'react-router-dom';
class App extends Component {
  
  componentDidMount(){
    this.props.onAutoSignup();
  }
  
  render(){

    let routers = (
      <Switch>
      <Route path="/" exact component={BurgerBuilder} />
      <Route path="/Auth" component={Auth} />
      <Redirect to='/' />
      </Switch>
    );

    if(this.props.isAuthenticated)
    {
      routers = (
        <Switch>
        <Route path="/Orders" component={Orders} />
        <Route path="/Checkout" component={Checkout} />
        <Route path="/Logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/Auth" component={Auth} />
        <Redirect to='/' />
        </Switch>
      );
    }

  return (
    <div>
    <Layout>
      <h1>My Burger</h1>
       {routers}
    </Layout>
    </div>
  );
  }
}

const mapStateToProps = state =>{
  return{
    isAuthenticated:state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch =>{
  return{
  onAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
