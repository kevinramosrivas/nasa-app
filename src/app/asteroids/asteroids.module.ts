import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsteroidsRoutingModule } from './asteroids-routing.module';
import { AsteroidsPageComponent } from './pages/asteroidsPage/asteroidsPage.component';


@NgModule({
  declarations: [
    AsteroidsPageComponent
  ],
  imports: [
    CommonModule,
    AsteroidsRoutingModule
  ]
})
export class AsteroidsModule { }
