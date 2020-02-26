import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: " World!" };
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount()");
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  UNSAFE_componentWillReceiveProps(newProps) {
      console.log('Component WILL RECIEVE PROPS!')
  }

  changeState() {
    this.setState({ hello: " ComponentLifeCycle!" });
  }

  render() {
    return (
      <div>
        <h1>Hello{this.state.hello}</h1>
        <h2>
          <button onClick={this.changeState.bind(this)}>Press Here!</button>
        </h2>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
}

export default LifeCycle;
