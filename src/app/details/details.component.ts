import { Component } from '@angular/core';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from '../housinglocation';
import { FormGroup, FormControl , ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  housingLocation: Housinglocation | undefined;
  houseLocationId!: number;

  applyForm = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
  })
  constructor(private housingService: HousingService , private route:ActivatedRoute){
    this.houseLocationId =Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.houseLocationId)
  }

  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName??'',
      this.applyForm.value.lastName??'',
      this.applyForm.value.email??'',
    );
  }

}
