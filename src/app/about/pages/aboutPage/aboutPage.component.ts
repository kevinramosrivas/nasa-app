import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './aboutPage.component.html',
  styleUrl: './aboutPage.component.css',
})
export class AboutPageComponent { 

  public iconsPath: string[] = [
    './assets/angular.svg',
    './assets/bootstrap.png',
    './assets/typescript.svg',
    './assets/rxjs.svg',
  ];
}
