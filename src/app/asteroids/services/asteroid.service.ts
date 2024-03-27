import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AsteroidsService {

    public baseUrl = 'https://api.nasa.gov/neo/rest/v1/neo/browse?ugFBiYFEfU1xYsbLxPp3CmODWrcu2A3JKdV6b6Cr';


    constructor(private httpClient: HttpClient) { }


    public getAsteroidsByDate(startDate: string, endDate:string){
        
    }
    
}