import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../models/user';


@Component({
  selector: 'app-profil',
    imports: [CommonModule,FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule
  ],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  user: User | null = null;  
  deleteMessage = '';
  passwordChangeMessage = '';
  newPassword = '';
  confirmPassword = '';
  constructor(private router: Router) {
    const userData = localStorage.getItem('loggedInUser');
    if (userData) {
      this.user = JSON.parse(userData);
  }
  }
  deleteProfile() {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.filter(u => u.email !== this.user!.email);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.removeItem('loggedInUser')
    localStorage.setItem('isLoggedIn', 'false');
    this.deleteMessage = 'Profil sikeresen törölve. Átirányítás...';
    setTimeout(() => {
      this.router.navigateByUrl('/regist');
    }, 1000)
  }
  logout() {
  localStorage.removeItem('loggedInUser');
  localStorage.setItem('isLoggedIn', 'false');
  this.router.navigateByUrl('/login').then(() => {
    window.location.reload();  
  })
}
 changePassword() {
    if (!this.user) return;
    if (this.newPassword !== this.confirmPassword) {
      this.passwordChangeMessage = 'A megadott jelszavak nem egyeznek.';
      return;}
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = [];
      for (let i = 0; i < users.length; i++) {
        let u = users[i];
        if (u.email === this.user!.email) {
          u.password = this.newPassword;
          this.user!.password = this.newPassword;}
          updatedUsers.push(u);}
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('loggedInUser', JSON.stringify(this.user));
    this.passwordChangeMessage = 'Jelszó sikeresen megváltoztatva.';
    this.newPassword = '';
    this.confirmPassword = '';
  }
}
