import { Component, OnInit } from '@angular/core';
import {UsersModel} from '../users.model';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users-read-all',
  templateUrl: './users-read-all.component.html',
  styleUrls: ['./users-read-all.component.css']
})
export class UsersReadAllComponent implements OnInit {

  users: UsersModel[] = [];

  displayedColumns: string[] = ['userId', 'username', 'password', 'displayName', 'contact', 'actions'];

  constructor(private service: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.findAllUsers();
  }

  findAllUsers(): void {
    this.service.findAllUsers().subscribe((response) => {
      console.log('Showing all users:');
      console.log(response);
      this.users = response;
    });
  }

  goToUsersCreate(): void {
    this.router.navigate([`users/create`]);
  }
}
