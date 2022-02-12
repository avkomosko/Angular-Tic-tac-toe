import {Pipe, PipeTransform} from '@angular/core';
import {Move} from '../services/game.service';

@Pipe({
  name: 'revert'
})
export class RevertPipe implements PipeTransform {

  transform(moves: Move[], ): Move[] {
    return moves.reverse();
  }
}
