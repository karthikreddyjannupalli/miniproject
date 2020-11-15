import React, { useState } from "react";
import { CardHeader, Col, Label, Row } from "reactstrap";
import { GoogleLoginButton } from "react-social-login-buttons";
import { Tab, Tabs } from "react-bootstrap";
import Card from '@material-ui/core/Card';
import "./signup.css";
import { GoogleLogin } from 'react-google-login';
import { Control, Errors, Form } from "react-redux-form";
import { Button } from "@material-ui/core";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function ControlledTabs() {
  const [key, setKey] = useState("Login");

  return (
    <Tabs
      id="sign"
      fill
      activeKey={key}
      onSelect={(k) => setKey(k)}
      variant="pills"
    >
      <Tab eventKey="Login" title="Login">
        <div className="container" style={{width: "200px"}}>
            
        </div>
      </Tab>
      <Tab eventKey="signup" title="Signup"></Tab>
    </Tabs>
  );
}
function SignUp() {
  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="offset-md-6 col-5">
          <Card>
            <ControlledTabs />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
