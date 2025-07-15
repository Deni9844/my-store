import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
     <button (click)="btnClicked.emit()" class="cursor-pointer text-red-600 w-full
    px-5 py-2 rounded-xl shadow-md hover:bg-slate-200 transition-all duration-300">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class Button {
   label = input('');

   btnClicked = output();
}
