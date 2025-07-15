import { Component, inject } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";
import { CartService } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton,RouterLink],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md font-semibold flex justify-between items-center">
      <span class="text-xl cursor-pointer" routerLink="/">My Store</span>
      <app-primary-button 
      [label]="'Cart (' + cartService.cart().length + ')'" 
      (btnClicked)="showButtonClicked()"
      routerLink="/cart"/>
    </div>
  `,
  styles: ``
})
export class Header {
    cartService = inject(CartService);
    showButtonClicked() {
        console.log('Cart button clicked!');
    }
}
