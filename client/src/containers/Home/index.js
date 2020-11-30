import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth.actions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {bugs, website } from "../../variables/general"
import Tasks from "../../components/Tasks/Tasks";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import AssignmentIcon from '@material-ui/icons/Assignment';
import Code from "@material-ui/icons/Code";
import { Button } from "@material-ui/core";
class Home extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
    console.log(this.props);
return (
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col-12 center-align">
            <div className="row">
              <div className="col-10">
              <h4><b>Hey there, {user.name}</b></h4> 
            </div>
            <div className="col-2">
            </div>
          </div>
        </div>
        </div>
        <br /><br /><br />
        <div className="offset-md-2">
        <GridContainer item justify="center">
        <GridItem xs={12} sm={12} md={10}  >
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Assignments",
                tabIcon: AssignmentIcon,
                tabContent: (
                  <Tasks
                    checkedIndexes={[]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                )
              },
              {
                tabName: "Contests",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              }
            ]}
          />
        </GridItem>
        </GridContainer>
        </div>
      </div>

    );
  }
}
Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Home);