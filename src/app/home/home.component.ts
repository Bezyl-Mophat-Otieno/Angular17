import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent , CommonModule , RouterLink , RouterLinkActive , RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  title = 'todo-app';
  housingLocationList: Housinglocation[] = [];

  constructor (private housingservice : HousingService ){
    this.housingLocationList = this.housingservice.getAllHousingLocations()
  }
 
  }


