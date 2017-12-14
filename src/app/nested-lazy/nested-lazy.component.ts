import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-lazy',
  template: `<p>I am lazily loaded by the lazily loaded container</p>`
})
export class NestedLazyComponent implements OnInit {

  constructor() {
    console.log('I am lazily loaded by the lazily loaded container');
  }

  ngOnInit() {
  }

}
