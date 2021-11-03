import React from 'react';
import './style.css';

export default class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };
  render() {
    return (
      <React.Fragment>
        <a onClick={this.handleClick} href="#">
          Want to buy a new car?
        </a>
        {this.state.visible && <p>Call +11 22 33 44 now!</p>}
      </React.Fragment>
    );
  }
}
