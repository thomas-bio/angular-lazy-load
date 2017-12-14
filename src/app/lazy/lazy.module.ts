import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import {routing} from './lazy.routing';
import {LazyService} from './lazy.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LazyComponent],
  providers: [LazyService]
})
export class LazyModule {
  constructor() {
    // For verifying when the module is constructed
    console.log('Lazy module constructed');
  }
}
