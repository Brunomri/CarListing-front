import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UsersModel} from '../users.model';
import {UsersService} from '../users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {

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

  updateUser(): void {
    this.service.updateUser(this.user).subscribe(() => {
      console.log('User updated:');
      console.log(this.user);
      this.router.navigate(['users']);
      this.service.message('User Updated!');
    }, error => {
      console.log(error);
      this.service.message('Verify that all fields have content');
    });
  }

  // tslint:disable-next-line:typedef
  validateInput() {
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
    return false;
  }

  cancelUpdate(): void {
    this.router.navigate(['users']);
  }
}
