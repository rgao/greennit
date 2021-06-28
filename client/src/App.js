import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/Home/Home.js";
import Subgreennit from "./pages/Subgreennit/Subgreennit.js";
import Thread from "./pages/Thread/Thread.js"
import UserProfile from "./pages/UserProfile/Profile.js"
import Footer from "./components/Footer/Footer.js";

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* future home page will be unique to each user*/}
            <Route exact path="/home" component={Home} />
            <Route path="/:subgreennit" component={Subgreennit} />
            <Route path="/subgreennit/:threadId" component={Thread} />
            <Route path="/user/:userName" component={UserProfile} />
            <Route path="*" component={Mars} />
          </Switch>
          <Nav />
          <Footer />
        </div>
      </Router>

    )
  }
}

export default App;

