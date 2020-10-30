import React from "react"
import MenuItems from "./MenuItem"
import log from "./logo.png"
import "./NavBar.css"
function NavBar(){ 
return(
<div >
    
<nav className="navItems">
<img className="logo" src={log} alt="Logo"/>

    <ul className="menu">
    {MenuItems.map((item)=>
        {
        return(<li><a style={{textDecoration:"none",fontSize:30}} href={item.url} className={item.cName}>{item.title}</a></li>)
        })}
        </ul>
    </nav>
    </div>

)

}
export default NavBar;