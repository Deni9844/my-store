import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButton } from "../../../components/primary-button/primary-button";
import { CartService } from '../../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  template: `
    <div class="bg-white shadow-md border-gray-200 rounded-xl p-6 flex flex-col gap-6 relative">
      <div class="mx-auto">
         <img [src]="product().image" alt="no image" class="w-[200px] h-[100px] object-contain ">

         <div class="flex flex-col mt-2">
            <span class="text-md font-bold">{{ product().title }}</span>
            <span class="text-sm">{{ '$' + product().price }}</span>
            <app-primary-button label="Add to cart" class="m-auto" (btnClicked)="cartService.addToCart(product())"/>
         </div>
         
         <span class="absolute top-2 right-3 text-sm font-bold w-fit" [class] = "product().stock ? 'text-green-600' : 'text-red-500'" >
            {{ product().stock ? product().stock + ' left': 'Out of stock' }}
         </span>
      </div>
    </div>
  `,
  styles: ``
})
export class ProductCard {

  cartService = inject(CartService);

  product = input.required<Product>();
}
