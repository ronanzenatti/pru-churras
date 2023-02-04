import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotateY(0)' })),
      state('rotated', style({ transform: 'rotateY(-360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in'))
    ])
  ]
})
export class Tab1Page {

  moeda = 'assets/logo.png';
  cara = 'assets/cara.png';
  coroa = 'assets/coroa.png';
  info = 'Clique em jogar a moeda!';
  state = 'default';

  constructor() { }

  jogarMoeda() {
    this.moeda = 'assets/logo.png';
    this.info = 'Girando...';
    this.state = (this.state === 'default' ? 'rotated' : 'default');

    setTimeout(() => {
      if (Math.random() < 0.5) {
        this.moeda = this.cara;
        this.info = "Cara!";
      } else {
        this.moeda = this.coroa;
        this.info = "Coroa!";
      }

    }, 2000);

  }

}
