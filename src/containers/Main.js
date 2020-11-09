import React,{Component} from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Header from '../components/Header';
import Home from './Home';
import LeaderboardMain from './LeaderBoard';
import Leaderboard from './LeaderBoard';
import SignUp from './Signup';


class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
            <Header />
            <Switch>
            <Route path="/home" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/leaderboard" component={LeaderboardMain} />
            <Redirect to="/home" />
            </Switch>
            </div>
        );
    }
}

export default Main;