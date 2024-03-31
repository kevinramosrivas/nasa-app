import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AsteroidsService } from '../../services/asteroid.service';
import { NearEarthObject } from '../../interfaces/asteroids.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-asteroids-page',
  templateUrl: './asteroidsPage.component.html',
  styleUrl: './asteroidsPage.component.css',
})
export class AsteroidsPageComponent implements OnInit{

  public asteroids:NearEarthObject[] = [];
  public hasErrors: boolean = false;
  public isLoading: boolean =  false;
  constructor(
    private asteroidsService: AsteroidsService
  ) { }

  ngOnInit(): void {
    this.asteroids = this.asteroidsService.cachedAsteroids;
  }

  public setAsteroids(asteroids: NearEarthObject[]): void {
    if(asteroids.length == 0){
      this.hasErrors = this.asteroidsService.errors;
    }
    this.asteroids = asteroids;

  }

  public setIsLoading(value:boolean):void{
    this.isLoading = value
  }


 }
