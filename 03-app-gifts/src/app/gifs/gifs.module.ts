import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardGifComponent } from './components/card-gif/card-gif.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomepageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardGifComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],exports: [
    HomepageComponent
  ]
})
export class GifsModule { }
