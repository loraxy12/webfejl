import { Component } from '@angular/core';
import { NagyPipe } from '../nagy.pipe';

@Component({
  selector: 'app-menu',
  standalone: true ,
  imports: [NagyPipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
