import React,{Component} from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Header from '../components/Header';
import EditorMain from './Editor/EditorMain';
import Home from './Home';
import LeaderboardMain from './LeaderBoard';
import SignUp from './Signup';
import Footer from './Footer';
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
            <Route path="/editor" component={EditorMain} />
            <Redirect to="/home" />
            </Switch>
            <Footer />
            </div>
        );
    }
}

export default Main;