import React from "react";

const quotes = ["quote1", "quote2", "quote3", "quote4", "quote5"];

class ReactPureComponent extends React.PureComponent {
  render() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return (
      <h1>
        Quote: <strong>{randomQuote}</strong>
      </h1>
    );
  }
}

class PureComponentEx extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "foo" };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ username: "bar" }), 2000); // Simulate sync ajax call
  }

  render() {
    return (
      <div>
        Welcome: {this.state.username}
        <ReactPureComponent />
      </div>
    );
  }
}

export default PureComponentEx;
