
import {  Component, Input, OnInit } from '@angular/core';
import { NearEarthObject } from '../../interfaces/asteroids.interface';

@Component({
  selector: 'app-asteroid-card',
  templateUrl: './asteroid-card.component.html',
  styleUrl: './asteroid-card.component.css',
})
export class AsteroidCardComponent implements OnInit{

  @Input()
  public asteroid!: NearEarthObject;

  ngOnInit(): void {
    //añadimos una imagen aleatoria al asteroid recibido
    this.asteroid.imagePath = this.asteroidImage;
  }


  get asteroidImage(): string {
    const baseImagePath = './assets/images/';
    const pathImages = [
      `${baseImagePath}asteroid-1.svg`,
      `${baseImagePath}asteroid-2.svg`,
      `${baseImagePath}asteroid-3.svg`,
      `${baseImagePath}asteroid-4.svg`,
      `${baseImagePath}asteroid-5.svg`,
      `${baseImagePath}asteroid-6.svg`,
    ];

    return pathImages[Math.floor(Math.random() * pathImages.length)];
    
  }
 }
