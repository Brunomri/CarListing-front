import { NgModule } from '@angular/core';
import {HomeComponent} from './components/views/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {CarsReadComponent} from './components/views/cars/cars-read/cars-read.component';
import {CarsCreateComponent} from './components/views/cars/cars-create/cars-create.component';
import {CarsDeleteComponent} from './components/views/cars/cars-delete/cars-delete.component';
import {CarsUpdateComponent} from './components/views/cars/cars-update/cars-update.component';
import {UsersReadAllComponent} from './components/views/users/users-read-all/users-read-all.component';
import {UsersCreateComponent} from './components/views/users/users-create/users-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cars',
    component: CarsReadComponent
  },
  {
    path: 'cars/create',
    component: CarsCreateComponent
  },
  {
    path: 'cars/delete/:carId',
    component: CarsDeleteComponent
  },
  {
    path: 'cars/update/:carId',
    component: CarsUpdateComponent
  },
  {
    path: 'users',
    component: UsersReadAllComponent
  },
  {
    path: 'users/:rolesIds',
    component: UsersCreateComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
