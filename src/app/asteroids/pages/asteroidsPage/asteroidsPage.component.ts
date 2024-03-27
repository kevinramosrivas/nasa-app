import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-asteroids-page',
  templateUrl: './asteroidsPage.component.html',
  styleUrl: './asteroidsPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsteroidsPageComponent { }
