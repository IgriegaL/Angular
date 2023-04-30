import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "Sared-Lazy-image",
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit{


  @Input()
  public url!: string;
  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url)throw new Error('Url no encontada');
  }

  onLoad() {
    setTimeout(()=> {
      // Carga la img luego de un segundo
      this.hasLoaded = true;
    }, 200)

  }

}
