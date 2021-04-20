import { Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';
import {CarsModel} from '../cars.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cars-create',
  templateUrl: './cars-create.component.html',
  styleUrls: ['./cars-create.component.css']
})
export class CarsCreateComponent implements OnInit {

  car: CarsModel = {
    color: '', fuel: '', make: '', model: '', transmission: '', trim: '', year: ''
  };

  constructor(private service: CarsService, private router: Router) { }

  ngOnInit(): void {
  }

  createCar(): void {
    this.service.createCar(this.car).subscribe(() => {
      console.log('New car created successfully:');
      console.log(this.car);
      this.router.navigate(['cars']);
      this.service.message('New car created!');
    }); /*, error => {
      for(let i = 0; i < error.error.errors.length; i++) {
        this.service.message(error.error.errors[i].message);
      }
    });*/
  }

  cancelCreate(): void {
    this.router.navigate(['cars']);
  }
}
