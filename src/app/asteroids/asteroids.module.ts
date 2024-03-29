import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsteroidsRoutingModule } from './asteroids-routing.module';
import { AsteroidsPageComponent } from './pages/asteroidsPage/asteroidsPage.component';
import { HttpClientModule } from '@angular/common/http';
import { AsteroidCardComponent } from './components/asteroid-card/asteroid-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { IsDangerousPipe } from './pipes/is-dangerous.pipe';
import { AsteroidImageComponent } from './components/asteroid-image/asteroid-image.component';
import { SpanDangerousComponent } from './components/span-dangerous/span-dangerous.component';
import { MessageAsteroidComponent } from './components/message-asteroid/message-asteroid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoMeteoritComponent } from './pages/info-meteorit/info-meteorit.component';


@NgModule({
  declarations: [
    AsteroidsPageComponent,
    AsteroidCardComponent,
    SearchBarComponent,
    AsteroidImageComponent,
    SpanDangerousComponent,
    MessageAsteroidComponent,
    InfoMeteoritComponent,
    IsDangerousPipe
  ],
  imports: [
    CommonModule,
    AsteroidsRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class AsteroidsModule { }
