import React from "react";
//class component
//let a = 2;
class HeadingComponentUsingClass extends React.Component {
  constructor() {
    super();
    console.log("Hello from constructor");
    this.state = {
      a: 2,
      b: 1,
    };
    //this.updateVariableValue();  remove
  }
  componentDidMount() {
    console.log("Hello from DidMount");
    this.updateVariableValue();
  }
  componentDidUpdate() {
    console.log("componentDidupdate");
  }
  componentWillUnmount() {
    console.log("component willUnmount");
  }
  //   updateVariableValue() {
  //     setInterval(() => {
  //         console.log("value-", this.state.a)
  //       //a += 1;
  //       this.setState({
  //         a: this.state.a + 1,
  //     })
  //     }, 2000);
  //   }
  updateVariableValue() {
    console.log("Value is being updated");
    setTimeout(() => {
      console.log("value-", this.state.a);
      //a += 1;
      this.setState(
        {
          a: this.state.a + 1,
        },
        () => {
          console.log("Value Updated succesfully");
        }
      );
    }, 5000);
  }

  render() {
    return (
      <div>
        <h1>Class Component - {this.props.title} </h1> <br />{" "}
        <p> Value - {this.state.a} </p>
      </div>
    );
  }
}

export default HeadingComponentUsingClass;
