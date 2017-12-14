import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NestedLazyComponent} from './nested-lazy.component';


const routes: Routes = [
  { path: '', component: NestedLazyComponent }
];

export const nestedRouting: ModuleWithProviders = RouterModule.forChild(routes);
