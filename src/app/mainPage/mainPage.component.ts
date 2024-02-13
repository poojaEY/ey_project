import { Component, OnInit } from '@angular/core';
import { CubeService } from './cubeservice.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-main-page',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent implements OnInit {
  searchTerm: string = '';
  cubeVisibility: { [key: string]: boolean } = {};


  constructor(private cubeService: CubeService) {
    this.setAllCubesVisible(true);
  }

  ngOnInit(): void {}

  private setAllCubesVisible(isVisible: boolean): void {
    // List all your cube names here
    const cubeNames = ['Sales forecasting', 'Image classification', 'Audio classification', 'Sentiment Analysis', /* ...other cube names... */];
    cubeNames.forEach(cubeName => {
      this.cubeVisibility[cubeName] = isVisible;
    });
  }

  filterResults(text: string): void {
    if (!text) {
      this.setAllCubesVisible(true);
      return;
    }

    for (const cubeName in this.cubeVisibility) {
      if (this.cubeVisibility.hasOwnProperty(cubeName)) {
        this.cubeVisibility[cubeName] = cubeName.toLowerCase().includes(text.toLowerCase());
      }
    }
  }
  anyCubeVisible(): boolean {
    return Object.values(this.cubeVisibility).some(visible => visible);
  }
}
