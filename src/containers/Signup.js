import React from "react"
import {GoogleLoginButton} from "react-social-login-buttons"
function SignUp(){
    return(
    <div class="page">
               <div className="signel"><div className="btnbox"><span onClick={login}>Login</span>
               <span onClick={register}>Register</span>
               <hr id="ind"></hr></div>
        <form id="login">
        <div><input placeholder="username" type="username"/></div>
        <div><input placeholder="password" type="password"/></div>
        <div className="gbut"><GoogleLoginButton style={{width:200},{backgroundColor:"#db4437"}} activeStyle={{backgroundColor:"#3b5998"}}/></div>
      </form>
       <form id="register">
            <input type="text"placeholder="Name"/>
            <br/>
            <input type="number"placeholder="Roll Number"/>
            <br/>
            <input type="text"placeholder="Branch"/>
            <br/>
            <input type="text"placeholder="Section"/>
        <div><input placeholder="username" type="username"/></div>
        <div><input placeholder="password" type="password"/></div>
    <input type="checkbox"/><label>Student</label>
    <input type="checkbox"/><label>Faculty</label>
    <div className="grbut"><GoogleLoginButton className="reg"text="Register with Google"style={{width:230,backgroundColor:"#db4437"}} activeStyle={{backgroundColor:"#3b5998"}}/></div>
</form>
       </div>
      
           </div>
    )
}

export default SignUp;
function login(){
    var logform=document.getElementById("login");
    var regform=document.getElementById("register");
    var indicator=document.getElementById("ind")
    logform.style.transform="translateX(0px)"   
    indicator.style.transform="translateX(-43px)"    
    regform.style.transform="translateX(0px)"  
    indicator.style.marginLeft="49px"
}
function register(){
    var logform=document.getElementById("login");
    var indicator=document.getElementById("ind")

    var regform=document.getElementById("register");
    logform.style.transform="translateX(340px)"
    regform.style.transform="translateX(340px)"
    indicator.style.transform="translateX(34px)" 
    indicator.style.marginLeft="43px"
}