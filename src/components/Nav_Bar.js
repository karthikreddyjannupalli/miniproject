import React from "react"
import MenuItems from "./MenuItem"
import {Link} from "react-router-dom"
function NavBar(){ 
return(
<div className="navi">
<nav className="navItems">
<img className="logo" src={"assets/logo/default.png"} alt="Logo"/>

    <ul className="menu">
    {MenuItems.map((item)=>
        {
        return(<li><a style={{textDecoration:"none",fontSize:25}} href={item.url} className={item.cName}>{item.icon}{item.title}</a></li>)
        })}
        </ul>
    </nav>
    </div>

)

}
export default NavBar;