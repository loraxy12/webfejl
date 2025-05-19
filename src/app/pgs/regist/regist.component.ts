import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../models/user';
import { Registrationchild } from '../../child/registrationchild/registrationchild.component';

@Component({
  selector: 'app-regist',
  standalone: true,
  imports: [ CommonModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatCardModule,Registrationchild
  ],
  templateUrl: './regist.component.html',
  styleUrl: './regist.component.scss'
})
export class RegistComponent {
  registForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.registForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(11)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      { validators: this.same }
    );
  }
  same(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { yes: true };
  }
  onSubmit() {
    if (this.registForm.valid) {
      const formValue = this.registForm.value;
      const userData: User = {
        name: formValue.name,
        email: formValue.email,
        phone: formValue.phone,
        password: formValue.password,
      };
      const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find(u => u.email === userData.email)
      if (existingUser) {
        alert('Ez az email már regisztrálva van.');
        return; }
      users.push(userData);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('loggedInUser', JSON.stringify(userData));
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigateByUrl('/profil');
    }
  }
  alertEdit() {
    alert('Szerkesztés engedélyezve. Módosítsd az űrlapot.');
  }
  get form() {
    return this.registForm.controls;
  }
}
