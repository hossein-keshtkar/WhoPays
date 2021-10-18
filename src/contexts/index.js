import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    stage: 1,
    players: [],
    result: "",
  };

  addPlayerHandler = (name) =>
    this.setState((prevState) => ({ players: [...prevState.players, name] }));

  removePlayerHandler = (index) => {
    this.setState(this.state.players.splice(index, 1));
  };

  stageHandler = () => {
    this.setState({
      stage: 2, 
    },()=>(setTimeout(() =>{this.resultHandler()},2000)))
  };

  resetHandler = () => {
    this.setState(
      {stage: 1,
      players: [],
      result: "",}
      )
  }

  resultHandler = () => {
    const { players } = this.state;
    this.setState({ result: players[Math.floor(Math.random() * players.length)]});
    // console.log(this.state);
  }

  render() {
    return (
      <>
        <MyContext.Provider
        value={{
          state: this.state,
          addPlayer: this.addPlayerHandler,
          removePlayer: this.removePlayerHandler,
          stage: this.stageHandler,
          reset: this.resetHandler,
          result: this.resultHandler,
        }}
        >
          {this.props.children}
        </MyContext.Provider>
      </> 
    );
  }
}

export { MyProvider, MyContext };
