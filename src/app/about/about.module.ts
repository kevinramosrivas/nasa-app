import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { TecnoIconComponent } from './components/tecno-icon/tecno-icon.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';


@NgModule({
  declarations: [
    TecnoIconComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
