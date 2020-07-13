import React from 'react';
import './App.css';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import wordsToNumbers from 'words-to-numbers';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.handleClick = this.handleClick.bind(this);
  }
  
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  handleClick() {
    var converter = require('number-to-words');
    var test = this.state.username;
    document.getElementById("demo").innerHTML = converter.toWords(test);
  }

  render() {
    return (
      <div>
    <div className="App">
    <h1>NTW</h1>
  <InputGroup>
    <FormControl
      placeholder="translate number to word"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      onChange={this.myChangeHandler}
      input value={this.state.username} onChange={event => this.setState({username: event.target.value.replace(/\D/,'')})}
    />
    <DropdownButton
      as={InputGroup.Append}
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-2"
    >
      <Dropdown.Item href="#"  onClick={this.handleClick}>Action</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="/Ntw">word to number</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
  <p id="demo">{this.state.username}</p>
    </div>
      </div>
    )
  }
}
export default App





