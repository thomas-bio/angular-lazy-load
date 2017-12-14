import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerComponent } from './eager/eager.component';

const routes: Routes = [
  { path: '', redirectTo: 'eager', pathMatch: 'full' },
  { path: 'eager', component: EagerComponent },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
  { path: 'lz', loadChildren: './lazy-default-export/lazy-default-export.module' },
  { path: 'container', loadChildren: './lazy-container/lazy-container.module#LazyContainerModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
