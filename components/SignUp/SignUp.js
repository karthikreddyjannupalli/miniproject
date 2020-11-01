import React from "react"
import Elements from "./Elements"
import "./SignUp.css"
import {FaGoogle} from"react-icons/fa"

function SignUp(){
  let ele=Elements.map((element)=>{
        return(<div><i className={element.icon}></i><input placeholder={element.placehold} type={element.input}/></div>)
        })
    return(
    <div class="form">
        <form>
           {    
               <div className="signel"><h1>Login/SignUp<hr/> </h1>
               {ele} <button type="submit">Login Using <FaGoogle/></button></div>
            }
         </form>
        </div>
    )
}
export default SignUp;