import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
  ],exports: [
    HomepageComponent
  ]
})
export class GifsModule { }
