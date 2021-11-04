import React, { Component } from "react";
import HeaderButton from "../header-button/HeaderButton";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      initTime: new Date(),
      text: props.text,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="headerContainer">
        <div className="title">{this.state.text}</div>
        <HeaderButton text="CV" onChange={this.handleChange} />
        <HeaderButton text="Contact" onChange={this.handleChange} />
      </div>
    );
  }
}
export default Header;
