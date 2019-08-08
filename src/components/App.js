import React, { Component } from 'react'
import Header from './Header/index'
import Footer from './Footer/index'
import About from '../Pages/About/index'
import Signin from './Header/login/Signin/index'
import Signup from './Header/login/Signup/index'
import Home from '../Pages/Home/index'
import {BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
/* import {withRouter} from 'react-router'; */
class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
          <div className="content container-fluid">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/hakkimizda" component={About}/>
                <Route path="/giris-yap" component={Signin}/>
                <Route path="/kayit-ol" component={Signup}/>
                <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
        <Footer/>
        </Router>
    )
  }
}
export default App