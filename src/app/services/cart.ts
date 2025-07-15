import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }
  removeFromCart(productId: number) {
    this.cart.set(this.cart().filter(product => product.id !== productId));
  }
}
