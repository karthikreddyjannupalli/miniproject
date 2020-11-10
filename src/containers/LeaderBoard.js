import React from "react";
import './leaderboard.css';
class Leaderboard extends React.Component {
  render() {
    var data = this.props.data || [],
      rows = [];
    var rows = new Array(data.length > 10 ? 10 : data.length)
      .fill(0)
      .map((z, i) => {
        var id = data[i].userId,
          un = data[i].userName,
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
    setTimeout(
      () =>
        this.update([
          { userId: 3405462, userName: "student1", earnings: 1000 },
          { userId: 203, userName: "student2", earnings: 500 },
          { userId: 203, userName: "student3", earnings: 500 },
          { userId: 203, userName: "student4", earnings: 500 },
          { userId: 203, userName: "student5", earnings: 500 },
          { userId: 203, userName: "student6", earnings: 500 },
          { userId: 203, userName: "student7", earnings: 500 },
          { userId: 203, userName: "student8", earnings: 500 },
          { userId: 203, userName: "student9", earnings: 500 },
          { userId: 203, userName: "student10", earnings: 500 },
        ]),
      500
    );
    /*var socket = this.connect('wss://r1-contest-api.herokuapp.com', event => {
			this.update(JSON.parse(event.data));
		});*/
  }

  connect(uri, messageHandler, tries) {
    tries = tries || 0;
    var socket = new WebSocket(uri);
    socket.addEventListener("open", (event) => {
      tries = 0;
      console.log("Connected to wss!");
    });
    socket.addEventListener("message", messageHandler);
    socket.addEventListener("close", (event) => {
      tries < 8 && tries++;
      var delay = Math.floor((Math.random() + 0.5) * Math.pow(1.5, tries));
      console.log(
        "Disconnected from socket. Reconnecting with random exponential backoff (" +
          delay +
          " seconds)..."
      );
      setTimeout(
        this.connect.bind(this, uri, messageHandler, tries),
        1000 * delay
      );
    });
    return socket;
  }

  update(data) {
    this.setState({ data: data });
  }

  render() {
    return <Leaderboard title="Leaderboard" data={this.state.data} />;
  }

  componentDidUpdate() {
    var loader = document.getElementsByClassName("loader")[0];
      loader.classList.remove("initial");
    loader.style.opacity = 0;
    loader.style.visibility = "hidden";
  }
}
export default LeaderboardMain;
