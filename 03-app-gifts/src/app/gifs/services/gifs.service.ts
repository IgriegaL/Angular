import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'}) // el @provideIn hace que esté disponible en toda la app
export class GifsService {

  private _tagsHistory: string[] = []; // usamos privado para evitar cambios en los tags ingresados

  constructor() { }

  get tagHistory(){
    return [...this._tagsHistory];
  }
  public searchTag( tag:string):void{
    this._tagsHistory.unshift(tag);
  }
}
