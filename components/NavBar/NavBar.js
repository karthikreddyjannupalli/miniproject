import React from "react"
import MenuItems from "./MenuItem"
import log from "./default.png"
import "./NavBar.css"
import {Link} from "react-router-dom"
function NavBar(){ 
return(
<div className="navi">
<nav className="navItems">
<img className="logo" src={log} alt="Logo"/>

    <ul className="menu">
    {MenuItems.map((item)=>
        {
        return(<li><a style={{textDecoration:"none",fontSize:30}} href={item.url} className={item.cName}>{item.icon}{item.title}</a></li>)
        })}
        </ul>
    </nav>
    </div>

)

}
export default NavBar;