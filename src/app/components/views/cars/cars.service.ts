import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarsModel} from './cars.model';
import {environment} from '../../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  baseUrl: string = environment.baseUrl;

  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllCars(): Observable<CarsModel[]> {
    const url = `${this.baseUrl}/cars`; /*?page=0&size=16*/
    return this.http.get<CarsModel[]>(url);
  }

  findCarById(carId: number): Observable<CarsModel> {
    console.log('carId = ' + carId);
    const url = `${this.baseUrl}/cars/${carId}`;
    return this.http.get<CarsModel>(url);
  }

  createCar(car: CarsModel): Observable<CarsModel> {
    const url = `${this.baseUrl}/cars/1`;
    return this.http.post<CarsModel>(url, car);
  }

  deleteCar(carId: number): Observable<void> {
    const url = `${this.baseUrl}/cars/${carId}`;
    return this.http.delete<void>(url);
  }

  updateCar(car: CarsModel): Observable<void> {
    const url = `${this.baseUrl}/cars/${car.carId}`;
    return this.http.put<void>(url, car);
  }

  message(str: string): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }
}
