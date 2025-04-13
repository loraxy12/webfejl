import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProfilComponent } from './profil/profil.component';
import { NagyPipe } from './nagy.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuComponent,ProfilComponent,NagyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ekszerwebshop';
}
