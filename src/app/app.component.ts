import { Component } from '@angular/core';
import { AppGameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(public appGameService: AppGameService) {}
}
