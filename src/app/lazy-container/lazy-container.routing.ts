import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LazyContainerComponent} from './lazy-container.component';

const routes: Routes = [
  { path: '', component: LazyContainerComponent },
  { path: 'nest', loadChildren: '../nested-lazy/nested-lazy.module#NestedLazyModule'}
];

export const containerRouting: ModuleWithProviders = RouterModule.forChild(routes);
