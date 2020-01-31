import React from 'react';
import './table.css';

class Square extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
      return (
        <input type="text" className="square" onChange={(e)=> this.props.handleChange(e.target.value,this.props.value)}/>
      );
    }
  }
  
  class Box extends React.Component {
    constructor() {
      super()
      var arr = new Array(10);
      this.handleChange=this.handleChange.bind(this)
    }
    renderSquare(i) {
        return <Square value={i} handleChange={this.handleChange}/>
    }
    handleChange(input,value) {
      console.log(input, value)
      this.arr[value]=input
      console.log(this.arr)
    }  
    render() {
        return (
            <div className="box">
                <div className="box-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="box-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
            </div>
            <div className="box-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
            </div>
          </div>
        )
      }
  }
  class Board extends React.Component {
    renderBox(i) {
      return <Box value={i} />;
    }
  
    render() {
     //const status = 'Next player: X';
  
      return (
        <div className="board">
          <div className="board-row">
            {this.renderBox(0)}
            {this.renderBox(1)}
            {this.renderBox(2)}
          </div>
          <div className="board-row">
            {this.renderBox(3)}
            {this.renderBox(4)}
            {this.renderBox(5)}
          </div>
          <div className="board-row">
            {this.renderBox(6)}
            {this.renderBox(7)}
            {this.renderBox(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="header">
            <h1>Sudoku!</h1>
          </div>
         
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
          <div className="footer">
          </div>
        </div>
      );
    }
  }
  export default Game;
  // ========================================
  
 