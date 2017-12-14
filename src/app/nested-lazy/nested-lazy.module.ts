import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {nestedRouting} from './nested-lazy.routing';
import { NestedLazyComponent } from './nested-lazy.component';

@NgModule({
  imports: [
    CommonModule,
    nestedRouting
  ],
  declarations: [NestedLazyComponent]
})
export class NestedLazyModule { }
