import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UsersModel} from '../users.model';
import {UsersService} from '../users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.css']
})
export class UsersDeleteComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  displayName = new FormControl('', [Validators.required]);
  contact = new FormControl('', [Validators.required]);

  user: UsersModel = {
    contact: '', displayName: '', password: '', username: ''
  };

  constructor(private service: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.user.userId = parseInt(this.route.snapshot.paramMap.get('userId'));
    this.findUserById();
  }

  findUserById(): void {
    this.service.findUserById(this.user.userId).subscribe((response) => {
      this.user = response;
      console.log(response);
    });
  }

  deleteUser(): void {
    this.service.deleteUser(this.user.userId).subscribe(() => {
      console.log('User deleted:');
      console.log(this.user);
      this.router.navigate(['users']);
      this.service.message('User deleted!');
    }, error => {
      this.service.message(error.error.error);
    });
  }

  cancelDelete(): void {
    this.router.navigate(['users']);
  }

}
