import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>My App</h1>
    <nav>
      <a routerLink="eager">Eager</a>
      <a routerLink="lazy">Lazy</a>
      <a routerLink="lz">Lazy with a default export</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
