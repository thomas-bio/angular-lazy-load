import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>My App</h1>
    <nav>
      <a routerLink="eager">Eager</a><br>
      <a routerLink="lazy">Lazy</a><br>
      <a routerLink="lz">Lazy with a default export and I am very fragile. Not reliable at all</a><br>
      <a routerLink="container">Test nested lazy loading</a><br>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
