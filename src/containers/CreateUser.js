import React,{Component} from 'react'
import axios from 'axios'
import'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login'
import Background from '../containers/cover.png'
export default class createUser extends Component{
    constructor(props){
        super(props)
        this.onChangeUserName=this.onChangeUserName.bind(this)
        this.onChangeName=this.onChangeName.bind(this)
        this.onChangePassword=this.onChangePassword.bind(this)
        this.onChangeBranch=this.onChangeBranch.bind(this)
        this.onChangeRollNo=this.onChangeRollNo.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.onChangeRole=this.onChangeRole.bind(this)
        this.state={
            name:"",username:"",password:"",branch:"",rollno:"",role:"student"
        }
    }
    onChangeName(e){
        this.setState({
           name: e.target.value
        });
    }
    onChangeRole(e){  
        this.setState({
            role: e.target.value
         });
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
    onChangeBranch(e){
        this.setState({
           branch: e.target.value
        });
    }
    onChangeRollNo(e){
        this.setState({
           rollno: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const user={
            name: this.state.name,
            username: this.state.username,
            password:this.state.password,
            branch:this.state.branch,
            rollno:this.state.rollno,
            role:this.state.role
        }
        console.log(user)
        axios.post('http://localhost:5000/list/add',user)
        .then(res=>console.log(res.data))
    }
    render(){
        return(
            <div className="login">
            <div className="create" style={{float:"left"}}>
<form className="creaform" onSubmit={this.onSubmit}  >
    <h3 style={{color:"royalblue"}}>Get Started with CodeX</h3>
    <br/>
  <div class="form-group" >
    <label >Name</label>
    <input type="text" class="form-control" value={this.state.name} onChange={this.onChangeName} id="name" aria-describedby="" placeholder="Enter Name"/>
    </div>
  <div class="form-group">
  <label for="exampleInputEmail1">UserName</label>
  <input type="text" class="form-control"value={this.state.username} onChange={this.onChangeUserName} id="uname" aria-describedby="" placeholder="UserName"/>
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" value={this.state.password} onChange={this.onChangePassword} id="exampleInputPassword1" placeholder="Password"/>
    <label for="exampleInputEmail1">Branch</label>
    <input type="text" class="form-control" aria-describedby="" placeholder="Enter Branch"value={this.state.branch} onChange={this.onChangeBranch}/>
    <label for="exampleInputEmail1">Roll Number</label>
    <input type="text" class="form-control" id="name" aria-describedby=""value={this.state.rollno} onChange={this.onChangeRollNo} placeholder="1602-xx-xxx-xxx"/>
 
  </div>
  <select name="role" value={this.state.role} onChange={this.onChangeRole}><option value="faculty">Faculty</option>
        <option value="student">Student</option>
        </select>
        <br/><br/>
  <button type="submit" class="btn btn-primary">Get Started</button>
</form>
    </div>
<div style={{float:"right",marginRight:50}}>
    <Login />
</div>
</div>        )
    }
}
