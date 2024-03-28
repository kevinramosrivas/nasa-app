import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NearEarthObject } from '../../interfaces/asteroids.interface';
import { AsteroidsService } from '../../services/asteroid.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl : './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit{ 
  @Output()
  public eventEmitter:EventEmitter<NearEarthObject[]> = new EventEmitter();

  @Output()
  public isLoading: EventEmitter<boolean> = new EventEmitter(false);

  public date = new FormControl(this.getDateNow);

  constructor(
    private AsteroidsService: AsteroidsService
  ) { }

  ngOnInit(): void {
    this.date.valueChanges.subscribe((date) => {
      console.log(date);
    } );
  }

  public getAsteroids(): void {
    this.isLoading.emit(true);
    this.eventEmitter.emit([]);
    this.AsteroidsService.getAsteroidsByDate(this.date.value!, this.date.value!)
    .subscribe(
      (asteroids) => {
        this.eventEmitter.emit(asteroids);
      }
    )
  }

  get getDateNow(): string {
    //yyyy-mm-dd
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }
}
