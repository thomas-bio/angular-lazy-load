import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {defaultExportRouting} from './lazy-default-export.routing';
import {LazierComponent} from './lazier.component';

@NgModule({
  imports: [
    CommonModule,
    defaultExportRouting
  ],
  declarations: [LazierComponent]
})
export default class LazyDefaultExportModule {
}
