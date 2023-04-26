import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = "iron Man";
  public age: number = 45;
  // Getter
  get capitalizedName():string {
    return this.name.toLocaleUpperCase();
  }
  // Metodo se llama cn ()
  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'Spiderman';
  }
  changeAge():void{
    this.age = 25;
  }

}
