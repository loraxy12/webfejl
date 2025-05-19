import { Component, OnInit } from '@angular/core';
import { KosarService } from '../../services/kosar.service';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Product } from '../../models/products';
import { FormPipe } from '../../pipes/form.pipe';

@Component({
  selector: 'app-kosar',
  imports: [CommonModule, MatSnackBarModule,FormPipe],
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.scss']
})
export class KosarComponent implements OnInit {
  cartItems: Product[] = [];
  total: number = 0;
  constructor(private cartService: KosarService) {}
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems()
    this.total = this.cartService.getTotalPrice();
  }
  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
    this.total = 0
  }
  removeItem(index: number): void {
  this.cartService.removeItem(index)
  this.cartItems = this.cartService.getCartItems();  
  this.total = this.cartService.getTotalPrice();     
}
}
