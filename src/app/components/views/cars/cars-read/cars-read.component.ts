import { Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';
import {CarsModel} from '../cars.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cars-read',
  templateUrl: './cars-read.component.html',
  styleUrls: ['./cars-read.component.css']
})
export class CarsReadComponent implements OnInit {

  cars: CarsModel[] = [];

  displayedColumns: string[] = ['carId', 'make', 'model', 'year', 'trim', 'color', 'transmission', 'fuel', 'actions'];

  constructor(private service: CarsService, private router: Router) { }

  ngOnInit(): void {
    this.findAllCars();
  }

  findAllCars(): void {
    this.service.findAllCars().subscribe((response) => {
      console.log('Showing all cars:');
      console.log(response);
      this.cars = response;
    });
  }

  goToCarsCreate(): void {
    this.router.navigate(['cars/create']);
  }
}
