import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/auth.actions";
import { Provider } from "react-redux";
import store from "./store";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login/index";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./containers/Home"
import Header from "./components/Header";
import LeaderboardMain from "./containers/LeaderBoard";
import EditorMain from "./containers/Editor/EditorMain";
import About from "./containers/Aboutus";
import Dashboard from "./containers/Home/index";
import Footer from "./containers/Footer";
import "./App.css";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {

    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        
        <Router>
          <div className="App">
          <Header />
          <Switch>
            <Route path="/home"  component={Home} />
            <Route path="/leaderboard"  component={LeaderboardMain} />
            <Route path="/editor"  component={EditorMain} />
            <Route path="/aboutus"  component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={SignUp}/>
            <PrivateRoute path="/dashboard" component={Dashboard} /> 
            <Redirect to="/home" />
            </Switch>
            <Footer />
          </div>
        </Router>
        
      </Provider>
    );
  }
}
export default App;