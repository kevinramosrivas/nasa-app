import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent { 
  public logo_asteroid = './assets/asteroid.svg';
  public logo_nasa = './assets/nasa.svg';
}
