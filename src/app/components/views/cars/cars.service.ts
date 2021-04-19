import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarsModel} from './cars.model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAllCars(): Observable<CarsModel[]> {
    const url = `${this.baseUrl}/cars`;
    return this.http.get<CarsModel[]>(url);
  }
}
