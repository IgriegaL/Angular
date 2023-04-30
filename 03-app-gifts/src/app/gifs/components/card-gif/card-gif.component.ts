import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-cards',
  templateUrl: './card-gif.component.html',
  styleUrls: ['./card-gif.component.css']
})
export class CardGifComponent implements OnInit{

  @Input() gif!: Gif; // Declaras el Input() aquí

  ngOnInit(): void {

    if (!this.gif) throw new Error ('Error: Gif es requerido');{} // si gif no viene en el formato
  }
}
