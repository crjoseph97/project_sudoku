import React from 'react';
import classNames from 'classnames';
import Stopwatch from "./Stopwatch";
import './table.css';

//---------------------------------------------------------------------------------
//Square signifies each Cell in the Sudoku Table
class Square extends React.Component {
  render() {
      return (
          <input type="text" className={this.props.getClassName(this.props.boxValue)}    onChange={(e)=> this.props.handleChange(e.target.value,this.props.boxValue)}/>
      );
  }
}
//---------------------------------------------------------------------------------  
//Box component represents each box in the table
class Box extends React.Component {
    constructor() {
      super()
      this.state = {
         boxArray : new Array(9).fill(0),
         inpErr : new Array(9).fill(false)
      }
      this.handleChange=this.handleChange.bind(this)
      this.getClassName=this.getClassName.bind(this)
    }
    renderSquare(i) {
        return  (
           <Square boxValue={i} handleChange={this.handleChange} getClassName={this.getClassName}/>

        )
    }
    getClassName(i) {
      if (this.state.inpErr[i] === false)
        return classNames('square')
      else
        return classNames("errorSquare")
    }
    handleChange(input,value) {

      if (!isNaN(input) && input<10 && input>=0) {
        let newArr = this.state.boxArray.slice(0)
        newArr[value] = input
        this.setState({boxArray : newArr},()=>{this.props.updateBoardArray(this.state.boxArray)})
        let errArr = this.state.inpErr.slice(0)
        errArr[value] = false
        this.setState({ inpErr : errArr})

      } 
      else {       
        // alert("Invalid input")
        console.log("Invalid Input")
        let errArr = this.state.inpErr.slice(0)
        errArr[value] = true
        this.setState({ inpErr : errArr})
        
      }
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

//------------------------------------------------------------------------------------------    
//Board is used to represent the entire SUdoku table
class Board extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          boardArray : new Array(9).fill(0),
          item : new Array(9).fill(0)
        }
        this.updateBoardArray=this.updateBoardArray.bind(this)
      }
      
      componentDidMount(){
        fetch('https://sugoku.herokuapp.com/board?difficulty=easy')
        .then(results => {
          return results.json();
          })
          .then(rawData => {
            this.setState({
              item : rawData
            })
            console.log(this.state.item)
          }        
        )
      }
      renderBox(i) {
        return <Box boardValue={i} updateBoardArray={(arr)=>{this.updateBoardArray(arr,i)}}  />;
      }
      updateBoardArray(arr, i) {
        let newArr = this.state.boardArray.slice(0)
        newArr[i] = arr
        // console.log(newArr)
        this.setState( {
          boardArray : newArr
        })
      } 
   
      render() {
  
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
              <Stopwatch />
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
