import { Component } from '@angular/core';
import { CardGame } from 'src/app/shared/models/card-game.model';

@Component({
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent {
  gamesList: Array<CardGame> = [
    {
      id: 1,
      name: 'Spiderman 2',
      price: 'R$299,00',
      frontImage: 'assets/images/games-front/spiderman2.jpg',
      information: 'Pré-venda',
      platforms: ['PS4', 'PS5'],
      tags: ['Exclusivo', 'Cross Buy']
    },
    {
      id: 2,
      name: 'Cyberpunk 2077',
      price: 'R$199,00',
      frontImage: 'assets/images/games-front/cyberpunk-2077.jpg',
      information: 'Jogue agora!',
      platforms: ['PS4', 'PS5'],
      tags: ['CrossBuy']
    },
    {
      id: 3,
      name: 'Elden Ring',
      price: 'R$299,00',
      frontImage: 'assets/images/games-front/elden-ring.jpg',
      information: 'Jogue agora!',
      platforms: ['PS4', 'PS5'],
      tags: ['Cross Buy']
    },
    {
      id: 4,
      name: 'Ratchet & Clank',
      price: 'R$199,00',
      frontImage: 'assets/images/games-front/ratchet-clank.jpg',
      information: 'Jogue agora!',
      platforms: ['PS5'],
      tags: ['Exclusivo']
    },
    {
      id: 5,
      name: 'The Last Of Us - Parte 2',
      price: 'R$99,00',
      frontImage: 'assets/images/games-front/the-last-of-us-part-2.jpg',
      information: 'Jogue agora!',
      platforms: ['PS5'],
      tags: ['Exclusivo']
    },
    {
      id: 6,
      name: 'Diablo IV',
      price: 'R$399,00',
      frontImage: 'assets/images/games-front/diablo-IV.jpg',
      information: 'Jogue agora!',
      platforms: ['PS4', 'PS5'],
      tags: ['Lançamento']
    }
  ]
}
