import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loginError = false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {
    console.log('LoginComponent inicializálva');
  }
  ngOnDestroy() {
    console.log('LoginComponent megsemmisül');
  }
onLogin() {
    const formValue = this.loginForm.value;
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    let foundUser: User | null = null
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === formValue.email && users[i].password === formValue.password) {
        foundUser = users[i];
        break;}}
    if (foundUser) {
      this.loginError = false;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser))
      this.router.navigateByUrl('/profil').then(() => {
        window.location.reload();
      });
    } else {
      this.loginError = true;
    }
  }
}
