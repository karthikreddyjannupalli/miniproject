import {
  Button,
  Card,
  CardContent,
  Fab,
  Grid,
  Input,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Label } from "reactstrap";

class Question extends React.Component {
  render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-1">
            <Label>
              <b>{this.props.index + 1}</b>
            </Label>
          </div>
          <div className="col-3">
            <Input
              placeholder="Question Title"
              id={`Question${this.props.index + 1}`}
              name={`Question${this.props.index + 1}`}
            />
          </div>
          <div className="col-8">
            <TextareaAutosize
              minRows={4}
              maxRows={4}
              style={{ width: "inherit" }}
              placeholder="Question"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <Label>TestCases</Label>
          </div>
          <div className="col-5">
            <input type="file" name={`document-${this.props.index}-document`} />
          </div>
          <div className="col-5">
            <input type="file" name={`document-${this.props.index}-document`} />
          </div>
        </div>
      </div>
    );
  }
}

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: Date.now(),
      contestId: this.ID(),
      buffer: [],
      QuestionNo: 1,
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.ID = this.ID.bind(this);
    this.extension = this.extension.bind(this);
  }
  ID = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };
  handleDateChange = (date) => {
    this.state.selectedDate = date;
  };
  extension = (e) => {
    e.preventDefault();
    const buffer = this.state.buffer.concat(Question);
    this.setState({ buffer });
    this.state.QuestionNo += 1;
    console.log(buffer);
  };
  render() {
    const documents = this.state.buffer.map((Element, index) => {
      return <Element key={index} index={index} />;
    });
    return (
      <div style={{ minHeight: 500 }} className="container">
        <div className="row">
          <div className="offset-1 col-10">
            <Card style={{ backgroundColor: "#f7f7f7" }}>
              <CardContent>
                <form noValidate>
                  <div className="row">
                    <div className="offset-4 col-3">
                      <Input
                        //onChange={this.onChange}
                        //value={this.state.firstname}
                        //error={errors.firstname}
                        id="contestname"
                        type="text"
                        placeholder="NAME OF CONTEST"
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="row">
                    <div className="col-3">
                      <Input
                        //onChange={this.onChange}
                        //value={this.state.firstname}
                        //error={errors.firstname}
                        id="duration"
                        type="text"
                        placeholder="Duration Of Contest"
                      />
                    </div>
                    <div className="offset-1">
                      <TextField
                        id="datetime-local"
                        label="contest starts at"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                    <div className="offset-1">
                      <Label style={{ fontSize: 20 }}>
                        <b>Contest ID: </b>
                        <em>{this.state.contestId}</em>
                      </Label>
                    </div>
                  </div>
                  {documents}
                  <div className="row">
                    <div className="offset-10">
                      <Button onClick={this.extension}>
                        <Fab color="primary" aria-label="add">
                          <AddIcon />
                        </Fab>
                      </Button>
                    </div>
                  </div>
                  <Button variant="outlined" type="submit" color="primary">
                        Create
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
