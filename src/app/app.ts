import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  template: `
    <app-header/>
    <router-outlet/>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('angular-ecomm');
}
