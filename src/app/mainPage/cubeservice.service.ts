import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CubeService {
  private cubes: string[] = [
    'Sales forecasting', 
    'Image classification', 
    'Audio classification', 
    'Sentiment Analysis'
   
  ];

  getCubes(): Observable<string[]> {
    console.log('Fetching cubes:', this.cubes);
    return of(this.cubes);
  }
}
