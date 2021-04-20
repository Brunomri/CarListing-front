import { Component, OnInit } from '@angular/core';
import {UsersModel} from '../users.model';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  displayName = new FormControl('', [Validators.required]);
  contact = new FormControl('', [Validators.required]);

  user: UsersModel = {
    contact: '', displayName: '', password: '', username: ''
  };

  constructor(private service: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  validateInput(): string {
    if (this.username.invalid) {
      return 'Username must not be empty!';
    }
    if (this.password.invalid) {
      return 'Password must not be empty!';
    }
    if (this.displayName.invalid) {
      return 'Display Name must not be empty!';
    }
    if (this.contact.invalid) {
      return 'Contact must not be empty!';
    }
  }

  createUser(): void {
    this.service.createUser(this.user).subscribe(() => {
      console.log('New user created: ');
      console.log(this.user);
      this.router.navigate(['users']);
      this.service.message('New user created');
    }); /*, error => {
      for(let i = 0; i < error.error.errors.length; i++) {
        this.service.message(error.error.errors[i].message);
      }
    });*/
  }

  cancelCreate(): void {
    this.router.navigate(['users']);
  }

}
