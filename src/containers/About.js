import React from "react"
import {Jumbotron,Button} from 'react-bootstrap'
function About(){
return(
<Jumbotron>
  <h1 style={{fontSize:50,marginLeft:0,marginTop:0,color:"#004E7C"}}>About CodeX</h1>
  <br/>
  <br/><hr/>
  <p style={{textAlign:"left"}}>
The purpose of CodeX is to provide an environment which helps to ease the learning process associated with programming abilities.  
CodeX provides a learning environment that consolidates students programming abilities and learning important algorithms by applying it on practical problems.This helps making students adept in competitive coding as well. 
The salient features include a convenient editor. Conduction of weekly coding competitions and a weekly leaderboard that helps in tracking a person’s progress. 
Faculty of Vasavi College Of Engineering Can conduct their academic related programming assignments and evaluate through Codex and assign marks.
   </p>
</Jumbotron>);
}
export default About;