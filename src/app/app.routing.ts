import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerComponent } from './eager/eager.component';

const routes: Routes = [
  { path: '', redirectTo: 'eager', pathMatch: 'full' },
  { path: 'eager', component: EagerComponent },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
  { path: 'lz', loadChildren: './lazy-default-export/lazy-default-export.module' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
