import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class KosarService {
  private cartKey = 'cart';
getCartItems(): Product[] {
  const cart = localStorage.getItem(this.cartKey);
  return cart ? JSON.parse(cart) : [];
}
addToCart(product: Product): void {
  const cart = this.getCartItems();
  cart.push(product);
  localStorage.setItem(this.cartKey, JSON.stringify(cart));
}
  getTotalPrice(): number {
    return this.getCartItems().reduce((sum, item) => sum + item.price, 0);
  }
  clearCart(): void {
    localStorage.removeItem(this.cartKey);}
    removeItem(index: number): void {
    const cart = this.getCartItems();
    cart.splice(index, 1);  
    localStorage.setItem(this.cartKey, JSON.stringify(cart)); 
  }
}
