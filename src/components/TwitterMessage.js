import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      counter: 280,
    };
  }

  handleChange = event => {
    let newVal = event.target.value
    this.setState({
      message: newVal,
      counter: this.props.maxChars -newVal.length
    })
  }

  render() {
    
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={(e) => this.handleChange(e)}
          value={this.state.message}
        />
        {this.state.counter > 0 ? (
          <p>Characters left: {this.state.counter}</p>
        ) : (
          <p style={{ color: "red" }}>Characters left: {this.state.counter}</p>
        )}
        
      </div>
    );
  }
}

export default TwitterMessage;
