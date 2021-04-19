import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-read',
  templateUrl: './cars-read.component.html',
  styleUrls: ['./cars-read.component.css']
})
export class CarsReadComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['carId', 'make', 'model', 'actions'];
  row: any;

  ngOnInit(): void {
  }
}
