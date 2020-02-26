import React from "react";

const quotes = ["quote1", "quote2", "quote3", "quote4", "quote5"];

const FunctionalStateless = () => {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <h1>
      Quote: <strong>{randomQuote}</strong>
    </h1>
  );
};

class NormalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "foo" };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ username: "bar" }), 2000); // Simulate async ajax call
  }

  render() {
    return (
      <div>
        Welcome: {this.state.username}
        <FunctionalStateless />
      </div>
    );
  }
}

export default NormalComponent;
