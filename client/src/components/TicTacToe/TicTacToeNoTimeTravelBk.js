import React, { Component } from 'react';
import styles from './TicTacToe.module.css';

const TicTacToe = () => {
  return (
    <div>
      <Game />
    </div>
  )
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  renderSquare = i => {
    return (
      <Square
      value={this.state.squares[i]}
      onSquareClick={() => this.handleSquareClick(i)}
      />
    );
  }

  handleSquareClick = i => {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    return (
      <div>
        <div className={styles.status}>{status}</div>
        <div className={styles['board-row']}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles['board-row']}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles['board-row']}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className={styles.square}
      onClick={onSquareClick}
      >
      {value}
    </button>
  )
}

const Game = () => {
  return (
    <div className={styles.game}>
      <div className={styles['game-board']}>
        <Board />
      </div>
      <div className={styles['game-info']}>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
