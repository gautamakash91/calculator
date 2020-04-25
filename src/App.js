import React from "react";

export class App2 extends React.Component{
  render(){
    return(
      <div>
        Hello world
      </div>
    )
  }
}
export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      a: 0,
      b: 0,
      result: 0
    }
  }

  handleA=(event)=>{
    this.setState({
      a: event.target.value
    })
  }

  handleB=(event)=>{
    this.setState({
      b: event.target.value
    })
  }

  findSum=()=>{
    this.setState({
      result: parseInt(this.state.a) + parseInt(this.state.b)
    })
  }

  findProduct=()=>{
    this.setState({
      result: parseInt(this.state.a) * parseInt(this.state.b)
    })
  }

  findDifference=()=>{
    this.setState({
      result: parseInt(this.state.a) - parseInt(this.state.b)
    })
  }

  reset=()=>{
    this.setState({
      result: 0,
      a: 0,
      b: 0
    })
  }

  render(){
    return(
      <div 
        style={{
          backgroundColor:"#f2f2f2",
          width: 200, 
          padding: 20,
          borderRadius: 20,
          textAlign: "center",
          margin: "auto"
        }}
      >
      <h1>Calculator</h1>
      <input type="number" value={this.state.a} onChange={this.handleA} />
      <input type="number" value={this.state.b} onChange={this.handleB} />
      <br />
      <button onClick={this.findSum}>
        SUM
      </button>
      <button onClick={this.findProduct}>
        PRODUCT
      </button>
      <button onClick={this.findDifference}>
        DIFFERENCE
      </button>
      <button onClick={this.reset}>
        RESET
      </button>
      <br />
      value of a: {this.state.a}
      <br />
      value of b: {this.state.b}
      <br />
      result: {this.state.result}
      </div>
    )
  }
}