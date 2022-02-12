import { Injectable } from '@angular/core';

type Player = 'X' | 'O';

export interface Move {
  row: number,
  column: number,
  moveNumber: number,
  player: string
  squares: string[]
};

type WinCombination = number[];

@Injectable({ providedIn: 'root'})

export class AppGameService {
  currentMove: number = 0;
  currentPlayer: Player = 'X';
  squares: string[] = new Array(9).fill('');
  history: Move[] = [];
  winner: string = '';
  winCombination: WinCombination = [];
  isReverted: boolean = false;

  calculateRowAndColumn(ind: number): void {
    const move: Move = {
      row: 0,
      column: 0,
      moveNumber: this.currentMove,
      player: this.currentPlayer,
      squares: [...this.squares]
    };

    if (ind < 3) {
      move.row = 1;
      move.column = ind +1;
    } else if (ind >= 3 && ind < 6) {
      move.row = 2;
      move.column = (ind - 3) + 1;
    } else {
      move.row = 3;
      move.column = (ind - 6) +1;
    }
    this.history.push(move);
  }

  checkWinner() {
    if (this.currentMove === 8) {
      this.winner = 'No one win';
    }
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    lines.forEach((el) => {
      const [a, b, c] = el;
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        this.winner = `The winner is  ${this.squares[a]}`;
        this.winCombination = el;
      }
    })

  }

  handlePlayer(): Player {
    if (this.currentPlayer === 'X') {
      this.currentPlayer = 'O';
      return 'X';
    }
    this.currentPlayer = 'X';
    return 'O';
  }

  makeTurn(ind: number) {
    if(this.winner) {
      return;
    }
    const player = this.handlePlayer();
    this.squares[ind] = player;

    this.calculateRowAndColumn(ind);

    this.checkWinner();
    this.currentMove++;
  }

  jumpTo(num: number) {
    this.squares = this.history[num].squares;
    console.log('jumpTo', this.squares);
  }

  reset() {
    this.currentMove = 0;
    this.squares = new Array(9).fill('');
    this.currentPlayer = 'X';
    this.history = [];
    this.winner = '';
    this.winCombination = [];
  }
}
