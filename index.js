import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import SignUp from "./components/SignUp/SignUp"
ReactDOM.render(<div>
<Router>
<Switch>
    <Route className="navigation" path="/" exact component={NavBar}/>
    <Route className="login" path="/signup" component={SignUp}/>
    </Switch>
</Router>
</div>,document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an a
