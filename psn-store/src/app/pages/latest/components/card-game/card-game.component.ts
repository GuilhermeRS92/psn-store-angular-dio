import { Component, Input } from '@angular/core';
import { CardGame } from 'src/app/shared/models/card-game.model';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent {
  @Input() gameInformation: CardGame = {
    id: 0,
    name: '',
    price: '',
    frontImage: '',
    information: '',
    platforms: [''],
    tags: ['', '']
  }
}
