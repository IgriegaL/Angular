import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent  {
  // de tipo Caracter, que importamos desde interface
  public characters : Character [] = [{
    name: "Krilin",
    power: 1000,
  },{
    name: "Goku",
    power: 9500
  },
  {
    name: "Vegeta",
    power: 7500
  }

];

}
