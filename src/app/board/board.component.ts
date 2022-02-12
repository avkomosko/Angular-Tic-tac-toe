import { Component, DoCheck, OnInit } from '@angular/core';
import { AppGameService } from '../services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit, DoCheck {

  squares!: string[];

  constructor(public appGameService: AppGameService) {
  }

  ngDoCheck(): void {
    this.squares = this.appGameService.squares;;
  }

  ngOnInit(): void {
    this.squares = this.appGameService.squares;
  }

}
