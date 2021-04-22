import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable} from 'rxjs';
import {UsersModel} from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = environment.baseUrl;

  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllUsers(): Observable<UsersModel[]> {
    const url = `${this.baseUrl}/users`;
    return this.http.get<UsersModel[]>(url);
  }

  findUserById(userId: number): Observable<UsersModel> {
    console.log('userId = ' + userId);
    const url = `${this.baseUrl}/users/${userId}`;
    return this.http.get<UsersModel>(url);
  }

  createUser(user: UsersModel): Observable<UsersModel> {
    const url = `${this.baseUrl}/users/1`;
    return this.http.post<UsersModel>(url, user);
  }

  updateUser(user: UsersModel): Observable<void> {
    const url = `${this.baseUrl}/users/${user.userId}`;
    return this.http.put<void>(url, user);
  }

  message(str: string): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }
}
