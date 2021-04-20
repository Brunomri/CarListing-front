import { Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CarsModel} from '../cars.model';

@Component({
  selector: 'app-cars-delete',
  templateUrl: './cars-delete.component.html',
  styleUrls: ['./cars-delete.component.css']
})
export class CarsDeleteComponent implements OnInit {

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

  deleteCar(): void {
    this.service.deleteCar(this.car.carId).subscribe(() => {
      console.log('Car deleted:');
      console.log(this.car);
      this.router.navigate(['cars']);
      this.service.message('Car deleted!');
    }, error => {
      this.service.message(error.error.error);
    });
  }

  cancelDelete(): void {
    this.router.navigate(['cars']);
  }

}
