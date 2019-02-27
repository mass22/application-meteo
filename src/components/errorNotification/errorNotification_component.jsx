import React, { Component } from "react";
import { Message } from "semantic-ui-react";

class ErrorNotification extends Component {
  constructor(props) {
    super(props);

    this.state = { visible: true };
  }

  handleDismiss = () => {
    this.setState({ visible: false });
  };

  render() {
    if (this.state.visible) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          warning
          header="Warning!"
          content={this.props.data.message}
        />
      );
    } else {
      return false;
    }
  }
}
export default ErrorNotification;
