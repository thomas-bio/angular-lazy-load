import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LazierComponent} from './lazier.component';

const routes: Routes = [
  { path: '', component: LazierComponent }
];

export const defaultExportRouting: ModuleWithProviders = RouterModule.forChild(routes);
