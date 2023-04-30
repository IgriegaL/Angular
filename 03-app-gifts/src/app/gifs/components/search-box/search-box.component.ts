import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-seach-box',
  template: `
<h5>Buscar :</h5>
<input type="text"
  class="form-control"
  placeholder="Buscar gifs.."
  (keyup.enter)="searchTag()"
  #txtTagInput
>
`
})

export class SearchBoxComponent {
  /*
  Tomamos el valor de el tag con ViewChild y lo declaramos como taginput,
  y lo declaramos como tipo element ref como HTMLPinputElement
  */
  @ViewChild('txtTagInput')
  public taginput!: ElementRef<HTMLInputElement>;
  // Para usar los servicios debemos inyectarlos en el constructor
  constructor(private gifsService: GifsService) { }



  searchTag() {
    const newTag = this.taginput.nativeElement.value;//Obtenemos el value del input (hay más)
    this.gifsService.searchTag(newTag);
    this.taginput.nativeElement.value = '';
  }

}
