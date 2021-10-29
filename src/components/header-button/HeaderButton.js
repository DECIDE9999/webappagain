import React, { Component } from "react";

class HeaderButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onChange(this.props.text);
  }

  render() {
    return (
      <div className="button" onClick={this.handleChange}>
        {this.state.text}
      </div>
    );
  }
}
export default HeaderButton;
