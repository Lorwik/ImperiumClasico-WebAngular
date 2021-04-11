import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescargaComponent } from './descarga/descarga.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    DescargaComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    DescargaComponent,
    AboutComponent
  ]
})
export class PagesModule { }
