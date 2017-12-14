import { Component, OnInit } from '@angular/core';
import {LazyService} from './lazy.service';

@Component({
  selector: 'app-lazy',
  template: `
    <p>
      lazy works!
    </p>
  `
})
export class LazyComponent implements OnInit {

  constructor(private l: LazyService) { }

  ngOnInit() {
  }

}
