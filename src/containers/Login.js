import React,{Component} from 'react'
import axios from 'axios'
import'bootstrap/dist/css/bootstrap.min.css';
export default class Login extends Component{
    constructor(props){
        super(props)
        this.onChangeUserName=this.onChangeUserName.bind(this)
        this.onChangePassword=this.onChangePassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.state={
            username:"",password:""
        }
        
    }
    onChangeUserName(e){
        this.setState({
           username: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
           password: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const details={
            username: this.state.username,
            password:this.state.password
        }
        console.log("In submit")
        axios.post('http://localhost:5000/list/',details)
 

    }
    render(){
        return(
            <div className="create">
<form className="creaform" onSubmit={this.onSubmit}  >
    <h3 style={{color:"royalblue"}}>Login </h3>
    <br/>
  <div class="form-group">
  <label for="exampleInputEmail1">UserName</label>
  <input type="text" class="form-control"value={this.state.username} onChange={this.onChangeUserName} id="uname" aria-describedby="" placeholder="UserName"/>
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" value={this.state.password} onChange={this.onChangePassword} id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
     </div>
        )
    }
}