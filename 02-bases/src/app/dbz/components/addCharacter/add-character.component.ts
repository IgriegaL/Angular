import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {


  /* Con este Output mas el eventEmitter se puede emitir */
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character : Character = {
    name: "",
    power: 0,
  }
  /**
   con el [(ngModel)] tenemos acceso al objeto

   subcribirse es algo en las incripciones que pueda suceder
   Escuchando las emisiones de un objeto que puede emitir durante toda su vida
   */
  emitCharacter():void {
    console.log(this.character);
    // Si no trae nada no emitirá
    if (this.character.name == "") return  ;
    // Con esto emitimos nuestro character
    this.onNewCharacter.emit(this.character);

  }



}
