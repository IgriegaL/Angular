import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  // exponer para interactúar con otros modulos
  exports: [
    HeroComponent,
    ListComponent
  ],
  declarations: [
    HeroComponent,
    ListComponent
  ], // importar los common modules
  imports: [
    CommonModule
  ]

})
export class HeroesModule { }
