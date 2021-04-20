import { Component, OnInit } from '@angular/core';
import {CarsModel} from '../cars.model';
import {CarsService} from '../cars.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cars-update',
  templateUrl: './cars-update.component.html',
  styleUrls: ['./cars-update.component.css']
})
export class CarsUpdateComponent implements OnInit {

  car: CarsModel = {
    color: '', fuel: '', make: '', model: '', transmission: '', trim: '', year: ''
  };

  constructor(private service: CarsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.car.carId = parseInt(this.route.snapshot.paramMap.get('carId'));
    this.findCarById();
  }

  findCarById(): void {
    this.service.findCarById(this.car.carId).subscribe((response) => {
      this.car = response;
      console.log(response);
    });
  }

  updateCar(): void {
    this.service.updateCar(this.car).subscribe(() => {
      console.log('Car updated:');
      console.log(this.car);
      this.router.navigate(['cars']);
      this.service.message('Car Updated!');
    }, error => {
      console.log(error);
      this.service.message('Verify that all fields have content');
    });
  }

  cancelUpdate(): void {
    this.router.navigate(['cars']);
  }

}
