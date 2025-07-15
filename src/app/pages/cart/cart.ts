import { Component, inject } from '@angular/core';
import { CartService} from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [],
  template: `
    <div>
      <h4>Cart Items</h4>
       @for (product of cartServices.cart(); track product.id) {
        <div>{{product.title}}
          <span (click)="handleRemove(product.id)">Remove</span>
        </div>

       }
    </div>
  `,
  styles: ``
})
export class Cart {
  cartServices = inject(CartService);

  handleRemove(productId: number) {
    this.cartServices.cart.set(this.cartServices.cart().filter(product => product.id !== productId));
  }
}
