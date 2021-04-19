import { NgModule } from '@angular/core';
import {HomeComponent} from './components/views/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {CarsReadComponent} from './components/views/cars/cars-read/cars-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cars',
    component: CarsReadComponent
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
