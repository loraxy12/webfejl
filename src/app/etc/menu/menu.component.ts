import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-menu',
  imports: [ RouterLink, RouterLinkActive,CommonModule,MatToolbarModule,MatButtonModule,MatButtonToggleModule,MatIconModule,MatTooltipModule
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']  
})
export class MenuComponent implements OnInit {
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  isLoggedIn: boolean = false
  ngOnInit() {
    const loggedIn = localStorage.getItem('isLoggedIn');
    this.isLoggedIn = loggedIn === 'true';
  }
  menuS(pageV: string) {
    this.selectedPage.emit(pageV)
  }
}
