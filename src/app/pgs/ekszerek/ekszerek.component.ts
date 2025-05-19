import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { KosarService } from '../../services/kosar.service';
import { Product } from '../../models/products';
import { FormPipe } from '../../pipes/form.pipe';
import { ImgnamePipe } from '../../pipes/imgname.pipe';


@Component({
  selector: 'app-ekszerek',
  imports: [CommonModule, MatSnackBarModule,FormPipe,ImgnamePipe],
  templateUrl: './ekszerek.component.html',
  styleUrls: ['./ekszerek.component.scss']
})
export class EkszerekComponent implements OnInit {
    products: Product[] = [  
  {name: 'Arany nyaklánc', price: 29990, image: 'arany.jpg' },
  { name: 'Gyémánt gyűrű', price: 59990, image: 'gygyuru.jpg' },
  { name: 'Ezüst karkötő', price: 19990, image: 'ezustkk.jpg' },
  { name: 'Ezüst nyaklánc', price: 9990, image: 'ezustnyak.jpg' },
  { name: 'Rubin gyűrű', price: 159990, image: 'rubingy.jpg' },
  { name: 'Arany karkötő', price: 9990, image: 'aranykar.jpg' },
  { name: 'Ékköves nyaklánc', price: 129990, image: 'ekkoves.jpg' },
  { name: 'Arany gyűrű', price: 79990, image: 'gygyuru.jpg' },
  { name: 'Rózsaarany karkötő', price: 219990, image: 'rozsa.jpg' },
  { name: 'Gyöngy fülbevaló', price: 15990, image: 'gyful.jpg' }  
  ];
 
  isLoggedIn: boolean = false;
  constructor(private snackBar: MatSnackBar, private cartService: KosarService) {}
  ngOnInit(): void {
    const loggedIn = localStorage.getItem('isLoggedIn');
    this.isLoggedIn = loggedIn==='true';
  }
 addToCart(productName: string) {
  if (!this.isLoggedIn) {
    this.snackBar.open('Kosárba tételhez jelentkezzen be!', 'OK', { duration: 1000 })
    return;
  }
  const product = this.products.find(p => p.name===productName);
  if (product) {
    this.cartService.addToCart(product);
    this.snackBar.open(`${product.name} hozzáadva a kosárhoz.`, 'OK', { duration: 1000 })
  }
}
}
