
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asteroid, NearEarthObject } from '../interfaces/asteroids.interface';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AsteroidsService {

    public baseUrl = 'https://api.nasa.gov/neo/rest/v1';
    public key = 'ugFBiYFEfU1xYsbLxPp3CmODWrcu2A3JKdV6b6Cr'
    public cachedAsteroids: NearEarthObject[] = [];
    public errors: boolean = false;

    constructor(private http: HttpClient) { 
        this.loadFromSessionStorage();
    }


    public getAsteroidsByDate(startDate: string, endDate:string):Observable<NearEarthObject[]>{
        const NearEarthObjects: NearEarthObject[] = [];
        return this.http.get<Asteroid>(`${this.baseUrl}/feed?start_date=${startDate}&end_date=${endDate}&api_key=${this.key}`)
        .pipe(
            //dentro de near_earth_objects hay un array de objetos del tipo NearEarthObject
            map((res) => res.near_earth_objects),
            map((near_earth_objects) => {
               Object.values(near_earth_objects).forEach(value => NearEarthObjects.push(...value));
               this.errors = false;
               return NearEarthObjects;
            }),
            tap(
                asteroids =>{
                    this.saveToSessionStorage(asteroids);
                }
            ),
            catchError(val => {
                this.errors = true;
                return of([])
            }
            )
        );
    }

    public getAsteroidById(id: string): Observable<NearEarthObject>{
        const asteroid = this.cachedAsteroids.find(asteroid => asteroid.id === id);
        if(asteroid) return of(asteroid);
        return this.http.get<NearEarthObject>(`${this.baseUrl}/neo/${id}?api_key=${this.key}`)
        .pipe(
            catchError(val => {
                this.errors = true;
                return of({} as NearEarthObject)
            })
        );
    }

    private saveToSessionStorage(asteroids: NearEarthObject[]): void {
        sessionStorage.setItem('asteroids', JSON.stringify(asteroids));
        this.cachedAsteroids = asteroids;

    }

    private loadFromSessionStorage(){
        if(!sessionStorage.getItem('asteroids')) return;
        this.cachedAsteroids = JSON.parse(sessionStorage.getItem('asteroids')!);
    }
}