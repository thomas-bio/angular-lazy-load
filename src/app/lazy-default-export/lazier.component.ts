import { Component, OnInit } from '@angular/core';

// There is a warning that the component is not found in any module while the LazyDefaultExportModule
// class is the default export, however, this component does show up.
//
// This default method of doing things seems to be very flaky and doesn't work as soon as something else changes.
// I do not recommend
@Component({
  selector: 'app-lazier',
  template: `<p>lazier works!</p>`
})
export class LazierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
