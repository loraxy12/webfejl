import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pgs/home/home.component';
import { RegistComponent } from './pgs/regist/regist.component';
import { LoginComponent } from './pgs/login/login.component';
import { EkszerekComponent } from './pgs/ekszerek/ekszerek.component';
import { ProfilComponent } from './pgs/profil/profil.component';
import { MenuComponent } from './etc/menu/menu.component';
import { KosarComponent } from './pgs/kosar/kosar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,RegistComponent,LoginComponent,EkszerekComponent,ProfilComponent,MenuComponent
  ,KosarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rubinwebshop';
  page="home"
  changePage(selectedPage:string){
    this.page=selectedPage
  }
}
