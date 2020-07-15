import React from 'react'
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

class Ntw extends React.Component {
    constructor(props) {
    super(props);
    this.state = { number: '' };
    this.handleClick = this.handleClick.bind(this);
  }
  myChangeHandler = (event) => {
    this.setState({number: event.target.value});
}

  handleClick() {
    var converter = require('number-to-words');
    var convernumber = this.state.number;
    document.getElementById("cn").innerHTML = wordsToNumbers(convernumber);
  }

  render() {
    return (
      <div>
    <div className="App">
    <h1 id="h1s">WTN</h1>
  <InputGroup id="is">
    <FormControl
      placeholder="translate word to number"
      aria-label="Recipient's number"
      aria-describedby="basic-addon2"
      onChange={this.myChangeHandler}
    />
    <DropdownButton
      as={InputGroup.Append}
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-2"
    >
      <Dropdown.Item href="#"  onClick={this.handleClick}>Action</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="/">number to word</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
  <p id="cn" class="sp">{this.state.number}</p>
    </div>
      </div>
    )
  }
}
export default Ntw;