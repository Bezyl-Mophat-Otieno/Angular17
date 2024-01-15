import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';


export const routes: Routes = [
    { path: 'details/:id', component: DetailsComponent },
    { path: 'housing', component: HousingLocationComponent},
    { path: '', component: HomeComponent },
];
