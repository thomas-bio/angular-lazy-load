import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-container',
  template: `
    <p>lazy-container works!</p>
    <nav>
      <a routerLink="nest">Load nested module</a><br>
    </nav>
  `
})
export class LazyContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
