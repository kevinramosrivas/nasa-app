import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NearEarthObject } from '../../interfaces/asteroids.interface';
import { AsteroidsService } from '../../services/asteroid.service';

@Component({
  selector: 'app-info-meteorit',
  templateUrl: './info-meteorit.component.html',
  styleUrl: './info-meteorit.component.css',
})
export class InfoMeteoritComponent implements OnInit{
  public asteroidInfo: NearEarthObject | undefined; 
  constructor(
    private route: ActivatedRoute,
    private asteroidService: AsteroidsService
  ){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.asteroidService.getAsteroidById(params['id'])
      .subscribe((asteroid) => {
         this.asteroidInfo = asteroid;
         this.asteroidInfo.imagePath = this.asteroidImage;
      });
    });
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
