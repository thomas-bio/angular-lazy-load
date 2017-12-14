import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyContainerComponent } from './lazy-container.component';
import {containerRouting} from './lazy-container.routing';

// This module is lazy loaded and lazy loads another module
@NgModule({
  imports: [
    CommonModule,
    containerRouting
  ],
  declarations: [LazyContainerComponent]
})
export class LazyContainerModule { }
