import React from "react";
import './leaderboard.css';
import axios from 'axios'
import io from 'socket.io-client'
class Leaderboard extends React.Component {
  render() {
    var data = this.props.data || [],
      rows = [];
    var rows = new Array(data.length > 10 ? 10 : data.length)
      .fill(0)
      .map((z, i) => {
        var id = data[i].userId,
          un = data[i].userName,
          qs= data[i].questions,
          tm=data[i].time,
          en = data[i].earnings,
          oc = () => {
            window.open(
              "http://www.rewards1.com/forums-profile.php?user_id=" + id,
              "_blank"
            );
          };
        return (
          <li key={i} onClick={oc}>
            <img
              src={"http://www.rewards1.com/uploads/avatar/" + id + ".jpg"}
              onError={(e) =>
                (e.target.src =
                  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
              }
            />
            <mark>{un}</mark>
            <small>{en.toFixed(2)}</small>
          </li>
        );
      });
    return (
      <div className="l1">
        <div class="loader initial">
          <div class="spinner">
            <div class="spinner-circle"></div>
            <div class="spinner-circle"></div>
          </div>
        </div>
        <div class="scroller">
          <div id="app1"></div>
        </div>
        <div className="leaderboard">
          <h1>{this.props.title || "Leaderboard"}</h1>
          <ol>{rows}</ol>
        </div>
      </div>
    );
  }
}

class LeaderboardMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    /*var socket = this.connect('wss://r1-contest-api.herokuapp.com', event => {
			this.update(JSON.parse(event.data));
		});*/
  }
  componentDidMount() {
    var socket=io('http://localhost:5000')
    console.log(socket)
    socket.on('get',(lb)=>{
      console.log("DATA")
      console.log(lb)
      setTimeout(
     () =>
     
      this.update([
 { userId: lb[0].id, userName: lb[0].name, questions: 3 , time: '1 Hr' , earnings: lb[0].points },
 { userId: lb[1].id, userName: lb[1].name, questions: 3 , time: '1 Hr' , earnings: lb[1].points },
 { userId: lb[2].id, userName: lb[2].name, questions: 3 , time: '1 Hr' , earnings: lb[2].points },
 { userId: lb[3].id, userName: lb[3].name, questions: 3 , time: '1 Hr' , earnings: lb[3].points },
 { userId: lb[4].id, userName: lb[4].name, questions: 3 , time: '1 Hr' , earnings: lb[4].points },
 { userId: lb[5].id, userName: lb[5].name, questions: 3 , time: '1 Hr' , earnings: lb[5].points },
 { userId: lb[6].id, userName: lb[6].name, questions: 3 , time: '1 Hr' , earnings: lb[6].points },
 { userId: lb[7].id, userName: lb[7].name, questions: 3 , time: '1 Hr' , earnings: lb[7].points },
 { userId: lb[8].id, userName: lb[8].name, questions: 3 , time: '1 Hr' , earnings: lb[8].points },
 { userId: lb[9].id, userName: lb[9].name, questions: 3 , time: '1 Hr' , earnings: lb[9].points },
          ]),
        500
      );  
    })
  }

  update(data) {
    this.setState({ data: data });
  }

  render() {
    return <Leaderboard title="Top Performers of the Week" data={this.state.data} />;
  }

  componentDidUpdate() {
    var loader = document.getElementsByClassName("loader")[0];
      loader.classList.remove("initial");
    loader.style.opacity = 0;
    loader.style.visibility = "hidden";
  }
}
export default LeaderboardMain;