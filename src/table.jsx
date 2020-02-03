import React from 'react';
import './table.css';

class Square extends React.Component {

  render() {
      return (
        <input type="text" className="square" onChange={(e)=> this.props.handleChange(e.target.value,this.props.boxValue)}/>
      );
    }
  }
  
  class Box extends React.Component {
    constructor() {
      super()
      this.state = {
         boxArray : new Array(9).fill(0)
      }
      this.handleChange=this.handleChange.bind(this)
    }
    renderSquare(i) {
        return  (
           <Square boxValue={i} handleChange={this.handleChange}/>

        )
      }
    handleChange(input,value) {

      // console.log(value)
      let newArr = this.state.boxArray.slice(0)
      newArr[value] = input
      // console.log(newArr)
      this.setState({boxArray : newArr},()=>{this.props.updateBoardArray(this.state.boxArray)})

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
    constructor(props) {
      super(props)
      this.state = {
        boardArray : new Array(9).fill(0)

     }
      this.updateBoardArray=this.updateBoardArray.bind(this)
    }

    renderBox(i) {
      return <Box boardValue={i} updateBoardArray={(arr)=>{this.updateBoardArray(arr,i)}}  />;
    }
    updateBoardArray(arr, i) {
      let newArr = this.state.boardArray.slice(0)
      newArr[i] = arr
      console.log(newArr)
      this.setState( {
        boardArray : newArr
            })
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
  
 